FROM node:20-bullseye-slim AS app
RUN useradd -m ctfuser
RUN chown root:root /home/ctfuser
RUN chmod 755 /home/ctfuser

WORKDIR /home/ctfuser/app

COPY --chown=root:root package.json .
COPY --chown=root:root chal.js .

RUN npm install

RUN echo "uoftctf{b4by_j4v4scr1p7_gr3w_up_4nd_b3c4m3_4_h4ck3r}" > /home/ctfuser/app/flag && \

chmod 444 /home/ctfuser/app/flag

RUN chmod -R 555 /home/ctfuser/

FROM pwn.red/jail

COPY --from=app / /srv

COPY --chmod=555 run /srv/app/run

ENV JAIL_PIDS=40 JAIL_MEM=100M JAIL_TIME=120