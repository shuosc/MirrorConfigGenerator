'use strict';
const Service = require('egg').Service;

class DebianService extends Service {

  async generateConfig(ip, name) {
    const debianVersions = require('../static/debian.json');
    let config;
    for (const item in debianVersions) {
      if (debianVersions[item].name.indexOf(name) !== -1) {
        config = debianVersions[item].config;
      }
    }
    const domain = (ip !== 'ipv6') ? 'mirrors.shu.edu.cn' : 'mirrors.shu6.edu.cn';
    console.log(config);
    config = config.replace(/{domain}/g, domain);
    return config;
  }

}

module.exports = DebianService;
