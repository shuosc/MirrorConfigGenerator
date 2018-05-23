'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = {
    keys: appInfo.name + '_1522233899962_3056',
    middleware: [ 'baseURL' ],
    baseURL: { url: '/repos' },
    mirror: {
      ip: 'ipv4'
    },
    view:{
      root: path.join(appInfo.baseDir, 'app/view'),
      defaultExtension: '.tpl',
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.nj':'nunjucks'
      },
    },
    security: {
      csrf: {
        enable: false,
      },
    },
    static: {
      prefix: '/repos/',
      dir: path.join(appInfo.baseDir, 'app/public')
    },
    siteFile: {
      '/favicon.ico': '/repos/img/favicon.ico'
    }
  };
  return config;
};

exports.view = {
  mapping: {
    '.css': 'assets',
  },
};