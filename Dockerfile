FROM node:16.18.1-bullseye

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN yarn install

CMD [ "yarn", "start:dev" ]
