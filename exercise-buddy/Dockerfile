FROM node:current-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN rm -rf node_modules

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]