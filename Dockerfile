FROM node:12-slim as build-stage

ARG PORT=80
ENV PORT $PORT

# ARG PROXY=http://172.17.9.1:3128/
# ENV HTTP_PROXY http://172.17.9.1:3128/
# ENV HTTPS_PROXY http://172.17.9.1:3128/

RUN mkdir /app
WORKDIR /app
COPY package.json .npmrc .yarnrc yarn.lock ./
RUN yarn
COPY . .
RUN yarn deploy:package
RUN yarn deploy:storybook

FROM nginx as production-stage
COPY --from=build-stage /app/storybookDist /usr/share/nginx/html

EXPOSE $PORT

CMD ["nginx", "-g", "daemon off;"]