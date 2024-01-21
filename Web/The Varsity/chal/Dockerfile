FROM node:20-bullseye-slim

WORKDIR /usr/src/app

ENV FLAG=uoftctf{w31rd_b3h4v10r_0f_parseInt()!}

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]
