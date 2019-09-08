FROM node:10.16-slim as back

RUN mkdir /code

COPY backend/package.json backend/yarn.lock /code/

WORKDIR /code

RUN yarn install

CMD ["yarn", "dev"]
