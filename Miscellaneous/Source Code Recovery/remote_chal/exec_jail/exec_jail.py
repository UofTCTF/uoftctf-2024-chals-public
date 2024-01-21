import ast
import subprocess
import base64
import os

d = ast.literal_eval(base64.b64decode(input()).decode())

os.system(f"cp {d['executable']} /tmp/a.out && chmod +x /tmp/a.out")

b = subprocess.check_output(["/tmp/a.out"], input=d["otp"], stderr=subprocess.STDOUT, timeout=20)
print(b.decode(), end="")
