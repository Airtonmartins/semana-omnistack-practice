FROM node:12.13-slim as back

RUN mkdir /code

WORKDIR /code

COPY backend/package.json backend/yarn.lock /code/

RUN yarn install 

CMD ["yarn", "dev"]
