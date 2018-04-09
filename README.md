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
$ curl "http://localhost:7001/ubuntu?ip=ipv4&version=16.04" | sudo tee /etc/apt/source.list
```

### Screenshot

![](app/public/screenshot0.png)
![](app/public/screenshot1.png)