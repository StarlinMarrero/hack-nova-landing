FROM node:22.13.1-alpine

RUN npm cache clean --force
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production --legacy-peer-deps
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
