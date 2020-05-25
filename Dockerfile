FROM node:alpine as builder
RUN apk update && apk add --no-cache make git

#WORKDIR /app
COPY package.json package-lock.json /app/
RUN cd /app && npm install

COPY .  /app
RUN cd /app && npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/* 
COPY ./nginx-conf/portfolio.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/Portfolio /usr/share/nginx/html
#COPY ./dist/Portfolio/ /usr/share/nginx/html

EXPOSE 80