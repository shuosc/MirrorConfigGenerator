'use strict';

const Controller = require('egg').Controller;

class SourcesController extends Controller {

  async getConfig() {
    let source = this.ctx.params.source;
    let ip = this.ctx.query.ip;
    let version = this.ctx.query.version;
    const defaultIP = this.app.config.mirror.ip;
    const config = await this.service.sources.generateConfig(source, ip, version);
    this.ctx.body = config;
  }

}

module.exports = SourcesController;
