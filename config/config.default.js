'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = {
    keys: appInfo.name + '_1522233899962_3056',
    middleware: [ 'baseURL' ],
    baseURL: {
      url: '/repos',
    },
    view: {
      root: path.join(appInfo.baseDir, 'app/view'),
      defaultExtension: '.tpl',
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.nj': 'nunjucks',
        '.css': 'assets',
      },
    },
    security: {
      csrf: {
        enable: false,
      },
    },
    static: {
      prefix: '/repos/',
      dir: path.join(appInfo.baseDir, 'app/public'),
    },
    siteFile: {
      '/favicon.ico': '/repos/img/favicon.ico',
    },
  };
  return config;
};
