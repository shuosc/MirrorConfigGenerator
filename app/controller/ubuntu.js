'use strict';
const Controller = require('egg').Controller;

class UbuntuController extends Controller {

  async getConfig() {
    const ubuntuVersions = require('../static/ubuntu.json').versions;
    const versions = [];
    for (const item of ubuntuVersions) {
      versions.push(item.version);
    }
    const validateRule = {
      ip: [ 'ipv4', 'ipv6' ],
      version: versions,
    };
    let ip = this.ctx.query.ip;
    let version = this.ctx.query.version;
    ip = (!ip) ? 'ipv4' : ip;
    version = (!version) ? '16.04' : version;
    this.ctx.validate(validateRule, {
      ip,
      version,
    });
    const config = await this.service.ubuntu.generateConfig(ip, version);
    this.ctx.body = config;
  }

}

module.exports = UbuntuController;
