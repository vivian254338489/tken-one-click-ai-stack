FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
ENV PORT=8794
EXPOSE 8794
CMD ["npm", "start"]
