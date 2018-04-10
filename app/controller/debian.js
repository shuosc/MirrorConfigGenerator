'use strict';
const Controller = require('egg').Controller;

class DebianController extends Controller {

  async getConfig() {
    const debianVersions = require('../static/debian.json');
    let names = [];
    for (const item in debianVersions) {
      names = names.concat(debianVersions[item].name);
    }
    console.log(names);
    const validateRule = {
      ip: [ 'ipv4', 'ipv6' ],
      name: names,
    };
    let ip = this.ctx.query.ip;
    let name = this.ctx.query.version;
    ip = (!ip) ? 'ipv4' : ip;
    name = (!name) ? 'stretch' : name;
    this.ctx.validate(validateRule, {
      ip,
      name,
    });
    const config = await this.service.debian.generateConfig(ip, name);
    this.ctx.body = config;
  }

}

module.exports = DebianController;
