blacklist = ["import", "exec", "eval", "os","open","read","system","module","write", "."]

while True:
    print(">>>", end=" ")
    try:
        cmd = input()
        for i in blacklist:
            if i in cmd:
                raise Exception("try harder")
        exec(cmd)
    except Exception as e:
        print(e)