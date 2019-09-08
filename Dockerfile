FROM node:10.16-slim as back

RUN mkdir /code

WORKDIR /code

COPY backend/package.json backend/yarn.lock /code/

RUN yarn install

CMD ["yarn", "dev"]

FROM node:10.16-slim as front

RUN mkdir /code

WORKDIR /code

COPY frontend/package.json frontend/yarn.lock /code/

RUN yarn install

CMD ["yarn", "start"]
