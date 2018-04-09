'use strict';
const Controller = require('egg').Controller;

class CentOSController extends Controller {

  async getConfig() {
    const centosVersions = require('../static/centos.json').versions;
    const versions = [];
    for (const item of centosVersions) {
      versions.push(item.version);
    }
    const validateRule = {
      ip: [ 'ipv4', 'ipv6' ],
      version: versions,
    };
    let ip = this.ctx.query.ip;
    let version = this.ctx.query.version;
    ip = (!ip) ? 'ipv4' : ip; // set ipv4 to default
    version = (!version) ? '7' : version; // set 7 to default
    this.ctx.validate(validateRule, {
      ip,
      version,
    });
    const config = await this.service.centos.generateConfig(ip, version);
    this.ctx.body = config;
  }

}

module.exports = CentOSController;
