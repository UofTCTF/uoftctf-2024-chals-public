FROM python:3.10.13-slim-bullseye AS app

RUN useradd -m ctfuser

RUN chown root:root /home/ctfuser

RUN chmod 755 /home/ctfuser

WORKDIR /home/ctfuser/app

COPY --chown=root:root exec_jail.py .

RUN chown -R root:root /home/ctfuser && \
    chmod -R 555 /home/ctfuser/app

FROM pwn.red/jail

COPY --from=app / /srv

COPY --chmod=555 ./run /srv/app/run

ENV JAIL_PIDS=50 JAIL_MEM=25M JAIL_TIME=120 JAIL_TMP_SIZE=100K
