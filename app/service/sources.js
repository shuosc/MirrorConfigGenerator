'use strict';

const Service = require('egg').Service;

class SourcesService extends Service {

  async generateConfig(source, ip, version) {
    let config = require('../public/data/sources.json').isos;
    let domain4 = require('../public/data/sources.json').domain4;
    let domain6 = require('../public/data/sources.json').domain6;
    const domain = (ip !== 'ipv6') ? domain4 : domain6;
    let sources, versionRight;
    for(let i=0; i<config.length; i++){
        if(config[i].value==source){
            sources = config[i];
            break;
        }
    }
    if(version==undefined){
        version=sources.children[0].version;
        versionRight=true;
    }else{
        for(let i=0; i<sources.children.length; i++){
            if(sources.children[i].value==version||sources.children[i].version==version){
                version=sources.children[i].version;
                versionRight=true;
                break;
            }
        }
    }
    if(versionRight){
        config = sources.config.replace(/{domain}/g, domain).replace(/{version}/g, version);
        return config;
    }else{
        return "请您检查输入的版本号是否正确，或者本工具暂不支持该版本！";
    }
  }

}

module.exports = SourcesService;
