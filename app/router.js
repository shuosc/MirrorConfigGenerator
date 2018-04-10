'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const controller = app.controller;
  const router = app.router;
  router.get('/', controller.index.index);
  require('./router/ubuntu')(app); // ubuntu router
  require('./router/centos')(app); // centos router
  require('./router/arch')(app);
};
