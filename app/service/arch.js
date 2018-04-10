'use strict';

const Service = require('egg').Service;

class ArchService extends Service {

  async generateConfig(ip) {
    const domain = (ip !== 'ipv6') ? 'mirrors.shu.edu.cn' : 'mirrors.shu6.edu.cn';
    let config = require('../static/arch.json').config;
    config = config.replace(/{domain}/g, domain);
    return config;
  }

}

module.exports = ArchService;
