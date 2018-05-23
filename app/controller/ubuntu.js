'use strict';
const Controller = require('egg').Controller;

class UbuntuController extends Controller {

  async getConfig() {
    const ubuntuVersions = require('../static/ubuntu.json').versions;
    const versions = [];
    for (const item of ubuntuVersions) {
      versions.push(item.version);
    }
    const validateRule = { // validate ip and version
      ip: [ 'ipv4', 'ipv6' ],
      version: versions,
    };
    const defaultIP = this.app.config.mirror.ip;
    const defaultVersion = this.app.config.mirror.ubuntu;
    let ip = this.ctx.query.ip;
    let version = this.ctx.query.version;
    ip = (!ip) ? defaultIP : ip; // set ipv4 to default
    version = (!version) ? defaultVersion : version;
    this.ctx.validate(validateRule, {
      ip,
      version,
    });
    const config = await this.service.ubuntu.generateConfig(ip, version);
    this.ctx.body = config;
  }

}

module.exports = UbuntuController;
