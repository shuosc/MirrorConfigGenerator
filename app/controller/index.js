'use strict';
const Controller = require('egg').Controller;

class IndexController extends Controller {

  async index() {
    const help = require('../static/help');
    const body = help.logo + help.indexHelp;
    this.ctx.body = body;
  }

}

module.exports = IndexController;
