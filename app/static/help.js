'use strict';

exports.logo = `
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

exports.indexHelp = `
This is mirror config file generator for Shanghai University Open Suorce Community mirror site.

Please change the {ip} and {version} to your own settings.

* Ubuntu:       curl http://localhost:7001/ubuntu?ip={ip}&version={version}
  Default {ip} = ipv4, {version} = 16.04
* Centos:       curl http://localhost:7001/centos?ip={ip}&version={version}
  Default {ip} = ipv4, {version} = 7
* Debian:       curl http://localhost:7001/debian
* ArchLinux:    curl http://localhost:7001/archlinux
`;
