FROM node:10-alpine

LABEL maintainer="AdrianDuan <adrianDuan@icloud.com> zhonger <zhonger@live.cn>"

RUN apk --update add tzdata \
    && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && apk del tzdata

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# add npm package
COPY package.json /usr/src/app/package.json

ENV NODE_ENV=production \
    EGG_SERVER_ENV=prod

RUN npm i --registry=https://registry.npm.taobao.org --production

# copy code
COPY . /usr/src/app

EXPOSE 7001

VOLUME [ "/public/data" ]

CMD ["/usr/src/app/entrypoint.sh"]