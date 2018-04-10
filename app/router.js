'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const controller = app.controller;
  const router = app.router;
  router.get('/', controller.index.index);
  router.get('/ubuntu', controller.ubuntu.getConfig);
  router.get('/centos', controller.centos.getConfig);
  router.get('/debian', controller.debian.getConfig);
  router.get('/archlinux', controller.arch.getConfig);
};
