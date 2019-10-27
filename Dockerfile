FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm i -g serve
RUN npm run build

EXPOSE 3000

CMD npm start