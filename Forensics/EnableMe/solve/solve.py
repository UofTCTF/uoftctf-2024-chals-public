# Extract the macro manually or by using oletools. Python script is not necessary to solve the challenge, you can simply call MsgBox on v9 instead of v10.

def xor(data, key):
    return ''.join(chr(char ^ ord(key[i % len(key)])) for i, char in enumerate(data))

enc_flag = [98, 120, 113, 99, 116, 99, 113, 108, 115, 39, 116, 111, 72, 113, 38, 123, 36, 34, 72, 116, 35, 121, 72, 101, 98, 121, 72, 116, 39, 115, 114, 72, 99, 39, 39, 39, 106]
enc_msg = [44, 32, 51, 84, 43, 53, 48, 62, 68, 114, 38, 61, 17, 70, 121, 45, 112, 126, 26, 39, 21, 78, 21, 7, 6, 26, 127, 8, 89, 0, 1, 54, 26, 87, 16, 10, 84]

flag_key = 23

flag = xor(enc_flag, chr(flag_key))
msg = xor(enc_msg, flag)

print(flag)
print(msg)
