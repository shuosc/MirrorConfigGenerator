'use strict';

module.exports = appInfo => {
  const config = {
    keys: appInfo.name + '_1522233899962_3056',
    middleware: [ 'baseURL' ],
    baseURL: { url: '/repos' },
    mirror: {
      ip: 'ipv4',
      ubuntu: '18.04',
      centos: '7',
      debian: 'stretch',
    },
    security: {
      csrf: {
        enable: false,
      },
    },
  };
  return config;
};
