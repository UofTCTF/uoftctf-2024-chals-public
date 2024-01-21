import requests

base_url = "http://localhost:3000"
s = requests.s()

r = s.post(
    f"{base_url}/register",
    json={
        "username": "idc",
    },
    headers={"content-type": "application/json"},
)

r = s.post(
    f"{base_url}/article",
    json={"issue": 0.0000009}, # can also use something like "9abc"
    headers={"content-type": "application/json"},
)

print(r.text)
