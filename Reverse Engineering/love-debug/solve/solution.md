# Love Debug - Solution

~~it's just brainfuck~~
The program simulates a Turing machine.
The "tape" starts at 0x406000.

You can dump the memory of the program before input is asked for.
There are many ways to do this, but one way is to use gdb.

Run the binary in gdb and when it asks, for input, run Ctrl-C to interrupt the program. Then run the following commands:

```
dump binary memory result.bin 0x406000 0x40D52F
```

This will dump the memory from 0x406000 to 0x40D52F to a file called result.bin.

We can examine the dump with hexdump:

```
$ hexdump -C result.bin | head -n 15
00000000  00 00 00 e2 00 9d 00 a4  00 ef 00 b8 00 8f 00 00  |................|
00000010  00 00 05 00 06 00 07 00  06 00 03 00 0a 00 03 00  |................|
00000020  0a 00 01 00 0d 00 01 00  0d 00 00 00 1d 00 00 00  |................|
00000030  00 00 00 00 1d 00 00 00  00 00 00 00 1d 00 00 00  |................|
00000040  00 00 01 00 1b 00 00 00  00 00 03 00 17 00 00 00  |................|
00000050  00 00 04 00 15 00 00 00  00 00 06 00 11 00 00 00  |................|
00000060  00 00 08 00 0d 00 00 00  00 00 0b 00 07 00 00 00  |................|
00000070  00 00 0d 00 03 00 00 00  00 00 0e 00 01 00 00 00  |................|
00000080  00 00 00 00 00 00 41 00  72 00 65 00 20 00 79 00  |......A.r.e. .y.|
00000090  6f 00 75 00 20 00 61 00  6d 00 61 00 7a 00 65 00  |o.u. .a.m.a.z.e.|
000000a0  64 00 3f 00 20 00 59 00  6f 00 75 00 20 00 6c 00  |d.?. .Y.o.u. .l.|
000000b0  69 00 6b 00 65 00 20 00  69 00 74 00 3f 00 20 00  |i.k.e. .i.t.?. .|
000000c0  53 00 61 00 79 00 20 00  73 00 6f 00 6d 00 65 00  |S.a.y. .s.o.m.e.|
000000d0  74 00 68 00 69 00 6e 00  67 00 21 00 0a 00 59 00  |t.h.i.n.g.!...Y.|
000000e0  6f 00 75 00 27 00 72 00  65 00 20 00 6a 00 75 00  |o.u.'.r.e. .j.u.|
```

As can be seen from the hexdump output, the symbols on the tape are one cell apart.
This was to prevent simply searching the memory for the flag.
This means that the characters for the flag are one byte apart, with a null byte in between.

We can load the dump and remove the null bytes with the following command:

```
cat result.bin | tr -d '\0' > result2.bin
```

And now we can match for the flag with a regular expression, of the format `uoftctf{.*}`

```
cat result2.bin | grep -o 'uoftctf{.*}'
```

And now we can run the program with the flag as input:

```
$ ./love-letter-for-you 

... hearts removed for brevity ...

Are you amazed? You like it? Say something!
You're just here for the flag, are you?

uoftctf{r3CuR51v3LY_3nuM3r4Bl3_R1zZ}

awww

```
