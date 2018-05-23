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

class HelpController extends Controller {

  async index() {
    // const url = this.ctx.request.header.host + this.app.config.baseURL.url + this.ctx.request.url;
    // console.log(url);
    indexHelp = indexHelp
      .replace(/{defaultUbuntu}/, this.app.config.mirror.ubuntu)
      .replace(/{defaultCentos}/, this.app.config.mirror.centos)
      .replace(/{defaultDebian}/, this.app.config.mirror.debian)
      .replace(/{defaultIP}/g, this.app.config.mirror.ip);
    const body = logo + indexHelp;
    this.ctx.body = body;
  }
}

module.exports = HelpController;
