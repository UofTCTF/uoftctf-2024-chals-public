import jwt

SECRET_KEY = 'torontobluejays'

def create_jwt(username):
    return jwt.encode({'username': username}, SECRET_KEY, algorithm='HS256')

def decode_jwt(token):
    try:
        return jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
    except jwt.InvalidTokenError:
        return None
