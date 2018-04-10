'use strict';

const Controller = require('egg').Controller;

class ArchController extends Controller {

  async getConfig() {
    const validateRule = {
      ip: [ 'ipv4', 'ipv6' ],
    };
    let ip = this.ctx.query.ip;
    ip = (!ip) ? 'ipv4' : ip;
    this.ctx.body = 'archLinux';
    this.ctx.validate(validateRule, {
      ip,
    });
    const config = await this.service.arch.generateConfig(ip);
    this.ctx.body = config;
  }

}

module.exports = ArchController;
