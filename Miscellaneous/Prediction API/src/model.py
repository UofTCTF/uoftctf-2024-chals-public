import tensorflow as tf
import numpy as np
import os

# Model / data parameters
NUM_CLASSES = 10
INPUT_SHAPE = (28, 28, 1)

def load_data(path):
    with np.load(path) as f:
        x_train, y_train = f['x_train'], f['y_train']
        x_test, y_test = f['x_test'], f['y_test']
        return (x_train, y_train), (x_test, y_test)

class Data():
    def __init__(self):
        (self.x_train, self.y_train), (self.x_test, self.y_test) = load_data('mnist.npz')
        self.x_train = self.x_train.astype("float32") / 255
        self.x_test = self.x_test.astype("float32") / 255
        self.x_train = np.expand_dims(self.x_train, -1)
        self.x_test = np.expand_dims(self.x_test, -1)
        self.y_train = tf.keras.utils.to_categorical(self.y_train, NUM_CLASSES)
        self.y_test = tf.keras.utils.to_categorical(self.y_test, NUM_CLASSES)

    def get_train(self):
        return self.x_train, self.y_train

    def get_test(self):
        return self.x_test, self.y_test

    def get_shape(self):
        return INPUT_SHAPE

class Model():
    """
    Contains model instance.
    """
    def __init__(self):
        self.model = tf.keras.Sequential()
        self.model.add(tf.keras.layers.Conv2D(2, kernel_size=(3, 3), activation="relu", input_shape=INPUT_SHAPE))
        self.model.add(tf.keras.layers.MaxPooling2D(pool_size=(2, 2)))
        self.model.add(tf.keras.layers.Flatten())
        self.model.add(tf.keras.layers.Dense(4, activation="relu"))
        self.model.add(tf.keras.layers.Dropout(0.25))
        self.model.add(tf.keras.layers.Dense(NUM_CLASSES, activation="softmax"))
        self.model.compile(loss="categorical_crossentropy", optimizer="adam", metrics=["accuracy"])

    def train(self, x_train, y_train):
        self.model.fit(x_train, y_train, batch_size=128, epochs=10, validation_split=0.1)

    def evaluate(self, x_test, y_test):
        return self.model.evaluate(x_test, y_test, verbose=0)
    
    def predict(self, images):
        return self.model.predict(images, verbose=0)
    
    def save_weights(self, path):
        self.model.save_weights(path)

    def load_weights(self, path):
        self.model.load_weights(path)

    def summary(self):
        self.model.summary()

    def save(self, path):
        self.model.save(path)

    def load(self, path):
        self.model = tf.keras.models.load_model(path)

class PredictorModel(Model):
    def __init__(self):
        self.model = tf.keras.models.load_model("model.h5")

    def predict(self, folder_path):
        """
        Returns a list of confidences of all prediction in images in folder_path.
        """
        if not self._verify_folder(folder_path):
            raise ValueError("Folder must only contain images.")
        
        # load images
        images = []
        for file in sorted(os.listdir(folder_path)):
            images.append(tf.keras.preprocessing.image.load_img(os.path.join(folder_path, file), color_mode="grayscale", target_size=(28, 28)))
        images = np.array([tf.keras.preprocessing.image.img_to_array(image) for image in images])
        images = images.astype("float32") / 255
        images = np.expand_dims(images, -1)

        # predict
        predictions = self.model.predict(images, verbose=0)
        return predictions.tolist()


    def _verify_folder(self, folder_path):
        """
        Returns True IFF folder_path is a valid folder of only images.
        """
        for file in os.listdir(folder_path):
            if not file.endswith(".png"):
                return False
        return True


if __name__ == "__main__":
    model = Model()
    data = Data()
    model.summary()
    model.train(data.get_train()[0], data.get_train()[1])
    score = model.evaluate(data.get_test()[0], data.get_test()[1])
    print("Test loss:", score[0])
    print("Test accuracy:", score[1])
    model.save_weights("model.weights.h5")
    model.save("model.h5")