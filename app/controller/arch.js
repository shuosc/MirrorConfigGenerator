'use strict';

const Controller = require('egg').Controller;

class ArchController extends Controller {

  async getConfig() {
    const validateRule = {
      ip: [ 'ipv4', 'ipv6' ],
    };
    let ip = this.ctx.query.ip;
    const defaultIP = this.app.config.mirror.ip;
    ip = (!ip) ? defaultIP : ip;
    this.ctx.validate(validateRule, {
      ip,
    });
    const config = await this.service.arch.generateConfig(ip);
    this.ctx.body = config;
  }

}

module.exports = ArchController;
