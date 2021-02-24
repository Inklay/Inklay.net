FROM node:15

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install tsc -g

COPY . ./

RUN cd frontend && npm install && npm run build

ENV CERTIFICATES="/app/certificates"
ENV USE_HTTPS="true"

CMD ["npm", "run", "build"]
