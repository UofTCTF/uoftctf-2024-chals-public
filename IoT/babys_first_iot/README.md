# University of Toronto CTF 2024

Flag 1 - Here is an FCC ID, Q87-WRT54GV81, what is the frequency in MHz for Channel 6 for that device? Submit the answer to port 3895. 

Flag 2 - What company makes the processor for this device? https://fccid.io/Q87-WRT54GV81/Internal-Photos/Internal-Photos-861588. Submit the answer to port 6318. 

Flag 3 - Submit the command used in U-Boot to look at the system variables to port 1337 as a GET request ex. http://35.225.17.48:1337/{command}. This output is needed for another challenge. 

Flag 4 – Submit the full command you would use in U-Boot to set the proper environment variable to a /bin/sh process upon boot to get the flag on the webserver at port 7777. Do not include the ‘bootcmd’ command. It will be in the format of "something something=${something} something=something" Submit the answer on port 9123. 

Flag 5 - At http://35.225.17.48:1234/firmware1.bin you will find the firmware. Extract the contents, find the hidden back door in the file that is the first process to run on Linux, connect to the backdoor, submit the password to get the flag. Submit the password to port 4545. 

Flag 6 - At http://35.225.17.48:7777/firmware2.bin you will find another firmware, submit the number of lines in the ‘ethertypes’ file multiplied by 74598 for the flag on port 8888. 

Hint: If there is an issue with submitting an answer with a challenge, try including newlines and null characters. For example: ‘printf 'answer\n\0' | nc 35.225.17.48 port’ 
