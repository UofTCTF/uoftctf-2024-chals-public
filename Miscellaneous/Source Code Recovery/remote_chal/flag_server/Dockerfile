FROM python:3.10.13-slim-bullseye

RUN apt-get update && \
    apt-get install -y gcc socat sudo netcat-traditional && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir /app

COPY --chown=root --chmod=500 flag_server.py /app/flag_server.py
COPY --chown=root --chmod=500 flag.py /app/flag.py

RUN chown root:root /app && \
    chmod 700 /app
 

EXPOSE 1337

WORKDIR /app

ENTRYPOINT ["socat", "TCP-LISTEN:1337,reuseaddr,fork", "EXEC:'python /app/flag_server.py',pty,ctty,stderr,raw,echo=0"]
