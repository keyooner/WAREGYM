#Fase 1 - node
FROM node:latest as node
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build -- --prod --environment $env
#Fase 2 - nginx
FROM nginx:latest
COPY --from=node /app/dist/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

