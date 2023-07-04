FROM node:18.15.0-alpine3.17

WORKDIR /usr/app

COPY package.json .
COPY src ./src

RUN npm install --quiet

EXPOSE 80

ENTRYPOINT [ "npm", "start" ]