FROM node

WORKDIR /usr

COPY . .

RUN npm install

EXPOSE 3333
