FROM node:20-bullseye-slim AS app
RUN useradd -m ctfuser
RUN chown root:root /home/ctfuser
RUN chmod 755 /home/ctfuser

WORKDIR /home/ctfuser/app

COPY --chown=root:root package.json .
COPY --chown=root:root chal.js .
COPY --chown=root:root evaluation_patched.js .

RUN npm install

RUN cp /home/ctfuser/app/evaluation_patched.js /home/ctfuser/app/node_modules/@babel/traverse/lib/path/evaluation.js

RUN echo "uoftctf{c411b4ck_h311_0r_c411b4ck_h34v3n??}" > /home/ctfuser/app/flag && \

chmod 444 /home/ctfuser/app/flag

RUN chmod -R 555 /home/ctfuser/

FROM pwn.red/jail

COPY --from=app / /srv

COPY --chmod=555 run /srv/app/run

ENV JAIL_PIDS=40 JAIL_MEM=100M JAIL_TIME=120