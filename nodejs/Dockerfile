FROM node:18.15.0

WORKDIR /usr/app

COPY package.json .
COPY src ./src

RUN npm install --quiet

RUN wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
RUN chmod +x wait-for-it.sh

EXPOSE 80

ENTRYPOINT ["./wait-for-it.sh" , "mysql:3306" , "--strict" , "--timeout=300" , "--" , "npm", "start"]