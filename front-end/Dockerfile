FROM node:12.13.0

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build

RUN mkdir -p /var/www/html
RUN mv build/* /var/www/html

WORKDIR /

RUN rm -rf /app