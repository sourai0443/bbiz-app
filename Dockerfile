FROM node:15.0.1-alpine3.10
LABEL MAINTAINER casio.pro

ENV PATH $PATH:/usr/src/app/node_modules/.bin
COPY . . 
WORKDIR /usr/src/app

