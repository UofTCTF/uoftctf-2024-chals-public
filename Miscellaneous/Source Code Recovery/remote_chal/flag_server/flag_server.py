import os
import uuid
import zlib
import base64
import subprocess

try:
    from flag import FLAG
except:
    FLAG = "test{FLAG}"

BANNED_LIST = ['#', '_', '?', ':']
MAX_LEN = 20000
N = 25

rows = []
row = input("C Code:")
while row:
    rows.append(row)
    row = input()
code = "\n".join(rows) + "\n"

if len(code) > MAX_LEN:
    quit()
for c in BANNED_LIST:
    if c in code:
        quit()
        
# Generate unique filenames using UUID
source_path = "/submit/src/" + str(uuid.uuid4()) + "_source.c"
output_path = "/submit/binary/" + str(uuid.uuid4()) + "_output"

# Write the user-provided code to the source file
with open(source_path, "w") as file:
    file.write(code)

# Compile the code using the unique output name
subprocess.run(["sudo", "-u", "nobody", "gcc", "-o", output_path, source_path], shell=False, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

# No need to delete since executing binary inside jail
subprocess.run(["chmod", "100", source_path], shell=False, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

# exception handler
def terminate(reason, output_path):
    try:
        print(reason)
        os.remove(output_path)
    finally:
        exit()

# Verify the file can be recovered
for i in range(N):
    otp = os.urandom(len(code))
    try:
        out = subprocess.check_output(["sudo", "-u", "nobody", "nc", "exec_jail", "5000"], input=base64.b64encode(repr({"executable": output_path, "otp": otp}).encode()) + b"\n", stderr=subprocess.STDOUT, timeout=15)
        v = int(out.strip())
    except subprocess.TimeoutExpired:
        terminate("Process Timed Out", output_path)
    except subprocess.CalledProcessError:
        terminate("Subprocess returned non-zero exit status", output_path)
    except ValueError:
        terminate("Output conversion failed", output_path)
    
    if zlib.crc32(bytes(a ^ b for a, b in zip(code.encode(), otp))) != v:
        terminate("Output Checksum Mismatch", output_path)
    else:
        print("Checksum Ok i={}".format(i))

os.remove(output_path)

print("Wow! You clearly recovered the file so here is your flag: {}".format(FLAG))
