'use strict';

module.exports = app => {
  const controller = app.controller;
  const router = app.router;
  router.get('/ubuntu', controller.ubuntu.getConfig);
};
