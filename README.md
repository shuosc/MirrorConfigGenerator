# Mirror Config Generator

Mirror config file generator for SHUOSC mirror site.
```
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
```

### Development

```bash
$ yarn
$ yarn dev
$ curl http://localhost:7001/
```

### Deploy

```bash
$ yarn start
$ yarn stop
```
### Usage

```bash
# Help
$ curl "http://mirrors.shu.edu.cn/repos"
# Ubuntu
$ cp /etc/apt/sources.list /etc/apt/sources.list.backup
$ curl "http://mirrors.shu.edu.cn/repos/ubuntu?ip={ip}&version={version}" | sudo tee /etc/apt/source.list
$ sudo apt-get update
# CentOS
$ cp /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
$ curl "http://mirrors.shu.edu.cn/repos/centos?ip={ip}&version={version}" | sudo tee /etc/yum.repos.d/CentOS-Base.repo
$ sudo yum clean all
$ sudo yum makecache
# Debian
$ cp /etc/apt/sources.list /etc/apt/sources.list.backup
$ curl "http://mirrors.shu.edu.cn/repos/debian?ip={ip}&version={version}" | sudo tee /etc/apt/sources.list
$ sudo apt-get update
# Arch Linux
$ curl "http://mirrors.shu.edu.cn/repos/archlinux?ip={ip}" | sudo tee /etc/pacman.d/mirrorlist
$ pacman -Syyu
```

### Screenshot

![](app/public/screenshot0.png)
![](app/public/screenshot1.png)