'use strict';
const Controller = require('egg').Controller;

const logo = `
███████╗██╗  ██╗██╗   ██╗ ██████╗ ███████╗ ██████╗
██╔════╝██║  ██║██║   ██║██╔═══██╗██╔════╝██╔════╝
███████╗███████║██║   ██║██║   ██║███████╗██║     
╚════██║██╔══██║██║   ██║██║   ██║╚════██║██║     
███████║██║  ██║╚██████╔╝╚██████╔╝███████║╚██████╗
╚══════╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝ ╚═════╝
███╗   ███╗ ██╗ ██████╗  ██████╗  ██████╗ ██████╗ 
████╗ ████║ ██║ ██╔══██╗ ██╔══██╗██╔═══██╗██╔══██╗
██╔████╔██║ ██║ ██████╔╝ ██████╔╝██║   ██║██████╔╝
██║╚██╔╝██║ ██║ ██╔══██╗ ██╔══██╗██║   ██║██╔══██╗
██║ ╚═╝ ██║ ██║ ██║  ██║ ██║  ██║╚██████╔╝██║  ██║
╚═╝     ╚═╝ ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ 
`;

let indexHelp = `
This is mirror config file generator for Shanghai University Open Suorce Community mirror site.

Please change the {ip} and {version} to your own settings.

* Ubuntu(Default {ip} = {defaultIP}, {version} = {defaultUbuntu})
  $ cp /etc/apt/sources.list /etc/apt/sources.list.backup
  $ curl "https://mirrors.shu.edu.cn/repos/ubuntu?ip={ip}&version={version}" | sudo tee /etc/apt/sources.list
  $ sudo apt-get update
  
* Centos(Default {ip} = {defaultIP}, {version} = {defaultCentos})
  $ cp /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
  $ curl "https://mirrors.shu.edu.cn/repos/centos?ip={ip}&version={version}" | sudo tee /etc/yum.repos.d/CentOS-Base.repo
  $ sudo yum clean all
  $ sudo yum makecache
  
* Debian(Default {ip} = {defaultIP}, {version} = {defaultDebian})
  $ cp /etc/apt/sources.list /etc/apt/sources.list.backup
  $ curl "https://mirrors.shu.edu.cn/repos/debian?ip={ip}&version={version}" | sudo tee /etc/apt/sources.list
  $ sudo apt-get update

* ArchLinux(Default {ip} = {defaultIP})
  $ curl "https://mirrors.shu.edu.cn/repos/archlinux?ip={ip}" | sudo tee /etc/pacman.d/mirrorlist
  $ pacman -Syyu
`;

const config = require('../public/data/sources.json').isos;

class HelpController extends Controller {

  async index() {
    indexHelp = indexHelp
      .replace(/{defaultUbuntu}/, config[0].children[0].value)
      .replace(/{defaultCentos}/, config[1].children[0].value)
      .replace(/{defaultDebian}/, config[2].children[0].value)
      .replace(/{defaultIP}/g, 'ipv4');
    const body = logo + indexHelp;
    this.ctx.body = body;
  }
}

module.exports = HelpController;
