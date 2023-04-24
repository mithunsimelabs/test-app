FROM node:lts
WORKDIR /app
COPY . .
CMD [ "npm", "run", "start" ]