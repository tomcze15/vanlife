FROM node:lts-alpine

RUN apk update && apk add bash --no-cache && rm -rf /var/cache/apk/*

WORKDIR home/node/app

COPY ./app/package*.json .

RUN npm install

COPY ./app .

CMD ["npm", "run", "dev"]