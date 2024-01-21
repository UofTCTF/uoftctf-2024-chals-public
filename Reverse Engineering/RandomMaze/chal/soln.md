# Solution

Looking at the source code file `nodes.c`, we see that there are 8 nodes, and each node is a binary tree node that contains the node to the next tree, and a null pointer. At the very bottom of the tree is a pointer to the function to call, `profit()` which prints out the flag.

The flag is stored in an array where each character has been XORed with a different byte, so the flag cannot be read directly from the decompiler. In the main file `maze.c`, the solver's answer is read in as a 64-bit long in hexadecimal format, and then re-cast as an 8-byte array, each containing the number that is considered for each node.

Each number is then checked for parity and validity. If it is even, the right node is taken. If it is odd, the left node is taken. Additionally, there are additional checks on the number (like if it is divisible by 3 or 4), which render the number invalid, upon which the `oops()` function is called and the maze fails. If the number is valid, it is XORed with the corresponding number in the flag array, and if the number is correct, the resulting XOR operation should result in the correct flag character.

The objective is to figure out which numbers solve the maze, and the point of the checks (both for validity and parity) are meant to help narrow down the solution space. This is also why I gave the free hint
that the flag is completely alphanumeric, ruling out all other ASCII characters. This will of course involve some guess and check, but a bunch of educated reasoning is also required.

The solution is thus to enter in each byte in hexadecimal form when prompted, in reverse order since x64 is little endian.

The correct numbers can be found in the `maze.c` source file.
