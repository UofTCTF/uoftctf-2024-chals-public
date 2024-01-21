# Serve file uploads

from flask import Flask, render_template, request, abort
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from werkzeug.utils import secure_filename
import os
from model import PredictorModel, Model, Data
import zipfile
import shutil
import resource
import contextlib

app = Flask(__name__)

app.config['MAX_CONTENT_LENGTH'] = 256 * 1024 * 1024

FLAG = 'UofTCTF{1t_w4s_ju5t_mn1st_101}'

predictor = PredictorModel()
data = Data()

REAL_ACC = predictor.model.evaluate(data.get_test()[0], data.get_test()[1], verbose=0)[1]

@contextlib.contextmanager
def limit(limit, type=resource.RLIMIT_AS):
    soft_limit, hard_limit = resource.getrlimit(type)
    resource.setrlimit(type, (limit, hard_limit)) # set soft limit
    try:
        yield
    finally:
        resource.setrlimit(type, (soft_limit, hard_limit)) # restore

limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["3 per minute, 20 per hour"]
)

@app.route('/')
@limiter.exempt
def upload_file():
   return render_template('index.html')

def process_photos_zip(filename):
    print(f'unzipping {filename}...')
    try:
        with limit(1 << 30):
            with zipfile.ZipFile(filename, 'r') as zip_ref:
                zip_ref.extractall(os.path.join("/home/jz/tmp"))
    except Exception as e:
        abort(400, e)
    
    os.remove(filename)
    # verify unzipped file is a folder
    if not os.path.isdir(filename[:-4]):
        abort(400, 'Error unzipping file.')

    print(f'predicting {filename[:-4]}...')

    try:
        predictions = predictor.predict(filename[:-4])
    except Exception as e:
        # delete unzipped folder
        shutil.rmtree(filename[:-4], ignore_errors=False, onerror=None)
        abort(400, e)

    # delete unzipped folder
    shutil.rmtree(filename[:-4], ignore_errors=False, onerror=None)

    return predictions


@app.route('/photo_uploader', methods = ['POST'])
@limiter.exempt # temporarily turning off rate limiter
def photo_uploader():
    if request.method == 'POST':
        f = request.files['file']
        filename = secure_filename(f.filename)
        # verify filename is non-empty
        if not filename:
            abort(400, 'No file selected.')
        full_path = os.path.join("/home/jz/tmp", filename)
        # verify filename is unique in ~/tmp
        if os.path.exists(full_path):
            abort(400, 'File already exists. Please rename your file and try again.')
        # save to ~/tmp
        f.save(full_path)
        if not zipfile.is_zipfile(full_path):
            os.remove(full_path)
            abort(400, 'Unsupported file type. Please upload a zip file.')
        
        # process file, return predictions
        return process_photos_zip(full_path)


@app.route('/weights_uploader', methods = ['POST'])
@limiter.exempt #temporarily turning off rate limiter
def weights_uploader():
    if request.method == 'POST':
        f = request.files['file']
        filename = secure_filename(f.filename)
        # verify filename is non-empty
        if not filename:
            abort(400, 'No file selected.')
        full_path = os.path.join("/home/user/tmp", filename)
        # verify filename is unique in ~/tmp
        if os.path.exists(full_path):
            abort(400, 'File already exists. Please rename your file and try again.')
        if not f.filename.lower().endswith('.h5'):
            abort(400, 'Unsupported file type. Please upload an h5 file.')
        # save to ~/tmp
        f.save(full_path)

        # verify weights are of correct format
        try:
            candidate_model = Model()
            candidate_model.load_weights(full_path)
        except Exception as e:
            os.remove(full_path)
            abort(400, 'An error occurred while loading your weights.')

        # test model on test set
        candidate_acc = candidate_model.evaluate(data.get_test()[0], data.get_test()[1])[1]
        # delete weights file
        os.remove(full_path)
        if abs(candidate_acc - REAL_ACC) > 0.2:
            return 'Your model is not similar enough.'
        else:
            return FLAG

if __name__ == '__main__':
   app.run(debug=True)