### STAGE 1: BUILD ###
FROM node:lts-alpine AS build
ARG ENV=develop
WORKDIR /app
COPY . .
RUN npm cache clean --force
RUN npm install --force
RUN npm run build:optimized

### STAGE 2: RUN ###
FROM nginx:stable AS ngi
COPY --from=build /app/dist/os-tech /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
