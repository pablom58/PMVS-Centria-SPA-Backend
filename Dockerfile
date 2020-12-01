FROM node

WORKDIR /usr/src/app

COPY ["package.json","tsconfig.json","/usr/src/app/"]

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY [".","/usr/src/app/"]

EXPOSE 3000

CMD [ "node", "./build/index.js" ]