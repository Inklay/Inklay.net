FROM node:15

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install tsc -g

COPY . ./

ENV CERTIFICATES="/app/certificates"
ENV USE_HTTPS="true"

CMD ["npm", "start"]
