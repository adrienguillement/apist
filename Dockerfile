FROM node:alpine3.12

WORKDIR /app

COPY package.json .

RUN npm install --quiet

COPY . .
