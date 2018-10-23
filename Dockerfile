FROM node:8.9.4 as development

RUN mkdir /app
WORKDIR /app

ADD . .

RUN yarn install
RUN yarn build

ENTRYPOINT [ "yarn", "start" ]

FROM nginx:alpine

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=development /app/build /data/www/
