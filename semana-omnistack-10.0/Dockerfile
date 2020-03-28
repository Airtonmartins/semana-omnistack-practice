FROM node:12.13-slim as back

RUN mkdir /code

WORKDIR /code

COPY backend/package.json backend/yarn.lock /code/

RUN yarn install 

CMD ["yarn", "dev"]

FROM node:12.13-slim as front

RUN mkdir /code

WORKDIR /code

COPY web/package.json web/yarn.lock /code/

RUN yarn install 

CMD ["tail", "-f", "/dev/null"]