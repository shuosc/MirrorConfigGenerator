'use strict';

module.exports = options => {
  return async function baseURL(ctx, next) {
    const baseURL = options.url;
    const url = ctx.request.url;
    if (url === baseURL) {
      ctx.request.url = url.replace(new RegExp(baseURL), '/');
    } else {
      ctx.request.url = url.replace(new RegExp(baseURL), '');
    }
    await next();
  };
};

