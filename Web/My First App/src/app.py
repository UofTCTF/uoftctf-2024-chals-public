from flask import Flask
from routes import web

app = Flask(__name__, template_folder='templates')
app.register_blueprint(web, url_prefix='/')


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=1337, debug=False)