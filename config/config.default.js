'use strict';

module.exports = appInfo => {
  const config = {
    keys: appInfo.name + '_1522233899962_3056',
    middleware: [],
    security: {
      csrf: {
        ignore: ctx => isInnerIp(ctx.ip),
      },
    },
  };
  return config;
};

function isInnerIp(ip) {
  if (ip === '::1' || ip === '127.0.0.1') {
    return true;
  }
  return false;
}
