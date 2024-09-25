FROM node:current-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV NODE_ENV = production

COPY . /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 3030

CMD ["npm", "start"]