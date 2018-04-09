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
# Help:
$ curl "http://localhost:7001"
# Ubuntu:
# Default: {ip} = ipv4 {version} = 16.04
$ curl "http://localhost:7001/ubuntu?ip={ip}&version={version}" | sudo tee /etc/apt/source.list
$ sudo apt-get update
$ sudo apt-get upgrade
# CentOS
# Default: {ip} = ipv4 {version} = 7
$ curl "http://localhost:7001/centos?ip={ip}&version={version}" | sudo tee /etc/yum.repos.d/CentOS-Base.repo
$ sudo yum clean all
$ sudo yum makecache
```

### Screenshot

![](app/public/screenshot0.png)
![](app/public/screenshot1.png)