FROM node:18 AS build

WORKDIR /usr/src/app

COPY app.js .

EXPOSE 3000

FROM build AS run

CMD [ "node", "app.js" ]