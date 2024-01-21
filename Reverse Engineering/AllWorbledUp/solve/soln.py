from itertools import product

def worbble(s):
    s1 = 5
    s2 = 31

    for n in range(len(s)):
        s1 = (s1 + ord(s[n]) + 7) % 65521
        s2 = (s1 * s2) % 65521

    return (s2 << 16) | s1

def shmorble(s):
    r = ""
    for i in range(len(s)):
        r += s[i - len(s)]

    return r
    
def blorble(a, b):
    return format(a, 'x') + format(b, 'x')

for s in product("bdrw013", repeat=9):
    string = "uoftctf{" + "".join(s) + "}"
    a = worbble(string)
    b = worbble(string[::-1])

    final = shmorble(blorble(a, b))

    if final == "a81c0750d48f0750":
        print(final, string)