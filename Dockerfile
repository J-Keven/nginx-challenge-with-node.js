FROM node

WORKDIR /usr

COPY . .


RUN npm install

ENTRYPOINT ["node", "index.js"]

EXPOSE 3333
