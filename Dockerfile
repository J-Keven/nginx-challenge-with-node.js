FROM node

WORKDIR /usr/app

COPY . .

RUN chmod +x .docker/entrypoint.sh  


EXPOSE 3333
