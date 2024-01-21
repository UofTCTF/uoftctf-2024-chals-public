FROM python:3.10.13-slim-bullseye

RUN apt-get update && apt-get install -y --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

RUN useradd -m ctfuser


RUN chown -R root:root /home/ctfuser
RUN chmod 755 /home/ctfuser
RUN chmod 555 /tmp

WORKDIR /home/ctfuser/app

COPY --chown=root:root app.py requirements.txt routes.py utils.py ./
COPY --chown=root:root static ./static
COPY --chown=root:root templates ./templates
COPY --chown=root:root flag.txt .

RUN pip install --no-cache-dir -r requirements.txt

USER root
RUN chmod -R 555 /home/ctfuser/app && \
    chmod 444 /home/ctfuser/app/flag.txt

USER ctfuser

EXPOSE 1337

CMD ["python", "app.py"]
