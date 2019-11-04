# specify the node base image with your desired version node:<version>
FROM node:carbon

WORKDIR /usr/src/app

# replace this with your application's default port
COPY package*.json ./
RUN npm install

RUN mkdir /usr/src/app/storage
RUN mkdir /usr/src/app/storage/pdf
RUN mkdir /usr/src/app/storage/png
RUN mkdir /usr/src/app/armazenamento
RUN mkdir /usr/src/app/armazenamento/audio
RUN mkdir /usr/src/app/armazenamento/image
RUN mkdir /usr/src/app/armazenamento/video

# Bundle app source
COPY . /usr/src/app

EXPOSE 3010

CMD [ "node", "/usr/src/app/server/server.js" ]
