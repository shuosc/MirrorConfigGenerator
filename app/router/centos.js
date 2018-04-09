'use strict';
module.exports = app => {
  const controller = app.controller;
  const router = app.router;
  router.get('/centos', controller.centos.getConfig);
};
