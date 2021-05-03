FROM node:latest

WORKDIR /app

COPY *.json ./

COPY . .

#RUN npm install express

CMD npm install; npm install express; npm start
#CMD ["node", "server.js"]