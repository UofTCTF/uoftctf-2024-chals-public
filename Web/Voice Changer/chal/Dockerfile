FROM node:18-alpine
RUN apk update
RUN apk add su-exec
RUN apk upgrade su-exec
RUN apk add ffmpeg su-exec
# Create app directory
WORKDIR /app

# Copy flag (secret.txt)
COPY secret.txt /

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY src/package*.json ./

RUN mkdir upload
RUN mkdir output
# If you are building your code for production
RUN npm i --only=production
# Bundle app source
COPY src/ .

RUN adduser -D myuser
RUN chmod -R 755 .
RUN chmod -R 777 ./upload
RUN chmod a+s ./upload
RUN chmod -R 777 ./output
RUN chmod a+s ./output


USER myuser

EXPOSE 3030:3030
CMD ["node", "index.js"]
