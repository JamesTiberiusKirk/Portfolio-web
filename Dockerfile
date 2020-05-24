FROM node:latest as node

WORKDIR /app

COPY . . 
RUN npm install ngx-markdown-editor tslint@^5.0.0 ace-builds
RUN npm install
RUN npm install -g @angular/cli

ENV PATH /app/node_modules/.bin:$PATH
RUN ng build

FROM nginx:alpine
copy --from=node /app/dist/Portfolio /usr/share/nginx/html
