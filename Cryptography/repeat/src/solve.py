import os

def xor(message, key):
    return bytes([message[i] ^ key[i % len(key)] for i in range(len(message))])

with open("flag.enc", "r") as f:
    encrypted_flag = f.read().split(" ")[1]
    f.close()
    encrypted_flag = bytes.fromhex(encrypted_flag)
    known_plaintext = "uoftctf{".encode()
    key = bytes([encrypted_flag[i] ^ known_plaintext[i] for i in range(len(known_plaintext))])
    
    # decrypt flag
    flag = xor(encrypted_flag, key)
    print(flag.decode())
