'use strict';
const Controller = require('egg').Controller;

class DebianController extends Controller {

  async getConfig() {
    const debianVersions = require('../static/debian.json');
    let names = [];
    for (const item in debianVersions) {
      names = names.concat(debianVersions[item].name);
    }
    const validateRule = {
      ip: [ 'ipv4', 'ipv6' ],
      name: names,
    };
    let ip = this.ctx.query.ip;
    let name = this.ctx.query.version;
    const defaultIP = this.app.config.mirror.ip;
    const defaultVersion = this.app.config.mirror.debian;
    ip = (!ip) ? defaultIP : ip;
    name = (!name) ? defaultVersion : name;
    this.ctx.validate(validateRule, {
      ip,
      name,
    });
    const config = await this.service.debian.generateConfig(ip, name);
    this.ctx.body = config;
  }

}

module.exports = DebianController;
