#!/bin/sh


if [ -f /public/data/sources.json ]; then
  rm /usr/src/app/app/public/data/sources.json
  ln -s /public/data/sources.json /usr/src/app/app/public/data/
else
  cp /usr/src/app/app/public/data/sources.json /public/data/  
fi

cd /usr/src/app
npm start