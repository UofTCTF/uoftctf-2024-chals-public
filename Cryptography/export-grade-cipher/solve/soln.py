#!/usr/bin/python3.11
from subprocess import Popen, PIPE, STDOUT
import sys
import ast
from src.exportcipher import *

class ReversibleLFSR:
    def __init__(self, seed, taps, size):
        self.state = seed
        self.taps = taps
        self.size = size
        self.mask = (1 << size) - 1

    def _shift(self):
        feedback = 0
        for tap in self.taps:
            feedback ^= (self.state >> tap) & 1
        self.state = ((self.state << 1) | feedback) & self.mask
    
    def _unshift(self):
        feedback = self.state & 1
        self.state = self.state >> 1
        for tap in self.taps:
            feedback ^= (self.state >> tap) & 1
        self.state = self.state | (feedback << (self.size - 1))
    
    def next_byte(self):
        val = self.state & 0xFF
        for _ in range(8):
            self._shift()
        return val
    
    def unshift_n_bytes(self, k):
        for _ in range(8*k):
            self._unshift()


def brute_force_lfsr():
    startpos = []
    for i in range(512 - 4):
        if None not in keystream[i:i+4]:
            startpos.append(i)
    print("Run of 4s found at: {}".format(startpos))
    j = startpos[0]
    for i in range(1, 1 << 17):
        if i % 5000 == 0:
            print("Brute Force Currently at i={}".format(i))
        lfsr17 = ReversibleLFSR(i, [2, 9, 10, 11, 14, 16], 17)
        b0, b1, b2, b3 = lfsr17.next_byte(), lfsr17.next_byte(), lfsr17.next_byte(), lfsr17.next_byte()
        lfsr32 = ReversibleLFSR((((b0 ^ keystream[j]) << 24) | ((b1 ^ keystream[j+1]) << 16) |
                                 ((b2 ^ keystream[j+2]) << 8) | ((b3 ^ keystream[j+3]))), [1, 6, 16, 21, 23, 24, 25, 26, 30, 31], 32)
        conflict = False
        lfsr17.unshift_n_bytes(4)
        lfsr32.unshift_n_bytes(3)
        for k in range(j, j + 4):
            assert keystream[k] == (lfsr17.next_byte() ^ lfsr32.next_byte())
        for k in range(j + 4, 511):
            v = lfsr17.next_byte() ^ lfsr32.next_byte()
            if keystream[k] is not None and keystream[k] != (v):
                conflict = True
                break
        if not conflict:
            print("Cracked at Iteration i={}".format(i))
            lfsr17 = ReversibleLFSR(i, [2, 9, 10, 11, 14, 16], 17)
            b0, b1, b2, b3 = lfsr17.next_byte(), lfsr17.next_byte(), lfsr17.next_byte(), lfsr17.next_byte()
            lfsr32 = ReversibleLFSR((((b0 ^ keystream[j]) << 24) | ((b1 ^ keystream[j+1]) << 16) |
                                 ((b2 ^ keystream[j+2]) << 8) | ((b3 ^ keystream[j+3]))), [1, 6, 16, 21, 23, 24, 25, 26, 30, 31], 32)
            # unshift to begining of keystream
            lfsr17.unshift_n_bytes(j + 4)
            lfsr32.unshift_n_bytes(j + 3)
            return lfsr17, lfsr32
    return None, None

if __name__ == "__main__":
    chal_proc = Popen([sys.executable, "src/chal.py"], stdout=PIPE, stdin=PIPE, stderr=STDOUT, encoding='ascii')
    pts = []
    nonces = []
    cts = []
    for _ in range(4):
        print(chal_proc.stdout.readline().strip())
    for i in range(100):
        pt = i.to_bytes() * 512
        chal_proc.stdin.write(repr(pt) + "\n")
        chal_proc.stdin.flush()
        nonce = chal_proc.stdout.readline().strip()
        nonce = ast.literal_eval(nonce[nonce.find("nonce: ") + len("nonce: "):])
        ct = chal_proc.stdout.readline().strip()
        ct = ast.literal_eval(ct[ct.find("ciphertext: ") + len("ciphertext: "):])
        assert len(ct) == 512
        pts.append(pt)
        nonces.append(nonce)
        cts.append(ct)
    keystream = []
    for i in range(511):
        found = False
        for j in range(100):
            if cts[j][i] == cts[j][i+1]:
                keystream.append(j)
                found = True
                break
        if not found:
            keystream.append(None)
    print("Recovered keystream: {}".format(keystream))
    lfsr17, lfsr32 = brute_force_lfsr()
    assert lfsr17 is not None and lfsr32 is not None
    # unshift to initial state
    lfsr17.unshift_n_bytes(511)
    lfsr32.unshift_n_bytes(511)
    # sanity check constants
    assert (lfsr17.state >> 16) == 1
    assert (lfsr32.state >> 24) == 0xAB
    print("Recovered Initial States: LSFR17={}, LSFR32={}".format(lfsr17.state, lfsr32.state))
    recovered_key = (lfsr17.state & 0xFFFF) | ((lfsr32.state & 0xFFFFFF) << 16)
    print("Recovered Key: {}".format(recovered_key))
    # check decryption
    cipher = ExportGradeCipher(recovered_key)
    for i in range(100):
        cipher.init_with_nonce(nonces[i])
        assert pts[i] == cipher.decrypt(cts[i])
    print("Decryption Success")
    chal_proc.stdin.write(repr(recovered_key) + "\n")
    chal_proc.stdin.flush()
    print(chal_proc.stdout.readline().strip())
