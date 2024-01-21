# Solution
To solve, recognize that wheel-barrow transform is a pun on the Burrows-Wheeler Transform (BWT), a common technique in compression.

To decode texts written in BWT, the text must be in one of two formats
- Text with an ending token like `$`
- Text with an associated index indicating which entry is the correct string

Commonly in literature surrounding the BWT, `$` represents the ending of the string, so we should recognize that.

Because this text is written with an ending token, we should use an algorithm to decode it using that format. However, I'm lazy so we can instead use an existing BWT decoder that takes as input the index and the encoded string and attempts to decode it. Since we don't know the index of the correct string, we brute force the values from 1-47 since the index can be at most the length of the transformed text. The decoding that has the ending token `$` at the end of the string is the only valid decoding which we get as `th3_burr0w_wh33ler_transform_is_pr3tty_c00l_eh$` 

We can use any existing decoder to do so such as: https://www.dcode.fr/burrows-wheeler-transform

The only valid index is 40 which we input to get the flag (here dcode calls it key).

# Flag
The flag is what we got just wrapped in `uoftctf{th3_burr0w_wh33ler_transform_is_pr3tty_c00l_eh$}`.
