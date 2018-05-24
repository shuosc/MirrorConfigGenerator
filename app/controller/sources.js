'use strict';

const Controller = require('egg').Controller;

class SourcesController extends Controller {

  async getConfig() {
    const source = this.ctx.params.source;
    const ip = this.ctx.query.ip;
    const version = this.ctx.query.version;
    const config = await this.service.sources.generateConfig(source, ip, version);
    this.ctx.body = config;
  }

}

module.exports = SourcesController;
