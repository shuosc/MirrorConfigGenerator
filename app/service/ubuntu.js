'use strict';
const Service = require('egg').Service;

class UbuntuService extends Service {

  async generateConfig(ip, version) {
    const ubuntu = require('../static/ubuntu.json');
    let config = ubuntu.config;
    const ubuntuVersions = ubuntu.versions;
    const domain = (ip !== 'ipv6') ? 'mirrors.shu.edu.cn' : 'mirrors.shu6.edu.cn';
    let name;
    for (const item of ubuntuVersions) {
      if (item.version === version) {
        name = item.name;
      }
    }
    config = config.replace(/{domain}/g, domain).replace(/{version}/g, name);
    return config;
  }

}

module.exports = UbuntuService;
