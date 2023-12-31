FROM node:carbon-slim

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json /app/
RUN npm install --legacy-peer-deps

# Bundle app source
COPY . /app/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
