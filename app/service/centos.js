'use strict';
const Service = require('egg').Service;

class CentOSService extends Service {

  async generateConfig(ip, version) {
    const centos = require('../static/centos.json');
    const centosVersions = centos.versions;
    let config;
    for (const item of centosVersions) {
      if (item.version === version) {
        config = item.config;
      }
    }
    const domain = (ip !== 'ipv6') ? 'mirrors.shu.edu.cn' : 'mirrors.shu6.edu.cn';
    config = config.replace(/{domain}/g, domain);
    return config;
  }

}

module.exports = CentOSService;
