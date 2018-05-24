<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="上海大学开源镜像站，致力于为上大校内提供高质量的开源软件镜像、Linux镜像源服务，帮助校内用户更方便地获取开源软件。本镜像站由上海大学开源社区负责维护">
    <meta name="keywords" content="镜像站,镜像源,Linux,开源,软件源"> 
    <meta name="author" content="SHUOSC">
    <title>上海大学开源镜像站</title>
    <link href="/repos/element-ui.css" rel="stylesheet">
    <link href="/repos/mirrors.css" rel="stylesheet">
    <link href="/repos/prism.css" rel="stylesheet">
    <link href="/repos/jquery.mCustomScrollbar.css" rel="stylesheet">
    <link href="/repos/repos.css" rel="stylesheet">
    <link rel="shortcut icon" href="/repos/img/favicon.ico">
</head>

<body>
    <div id="menu">
        <div class="container">
        <el-menu :default-active="activeIndex" mode="horizontal" >
            <div class="title">上海大学开源镜像站</div>
            <div class="navBar">
                <el-menu-item index="7"><a href="https://osc.shu.edu.cn">Home</a></el-menu-item>
                <el-menu-item index="2"><a href="/news/">News</a></el-menu-item>
                <el-menu-item index="3"><a href="/status.html">Status</a></el-menu-item>
                <el-menu-item index="4"><a href="/help/">Help</a></el-menu-item>
                <el-menu-item index="5"><a href="/news/atom.xml">RSS</a></el-menu-item>
                <el-menu-item index="6"><a href="/">Mirrors</a></el-menu-item>
            </div>
            <div class="clear"></div>
        </el-menu>
        </div>
    </div>
    <div id="generator">
        <div class="container">
            <header>
                <h2>镜像源快捷配置工具</h2>
            </header>
            <template>
                <el-form ref="generator" :model="generator" label-position="right">
                    <el-form-item label="操作系统或软件类型：">
                        <el-select v-model="linux" placeholder="请选择操作系统或软件" @change="changeLinux">
                            <el-option v-for="item in isos" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="版本号：">
                        <el-select v-model="version" placeholder="请选择版本号">
                            <el-option v-for="item in releases"  :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="访问类型：">
                        <el-radio-group v-model="ip">
                            <el-radio label="ipv4" value="ipv4"></el-radio>
                            <el-radio label="ipv6" value="ipv6"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="下载配置文件地址：">
                        <pre><code class="language-bash" v-text="downloadUrl" id="code1"></code></pre>
                        <el-button type="info" plain class="btn" data-clipboard-target="#code1" @click="copied"> Copy </el-button>    
                    </el-form-item>
                    <el-form-item label="一键配置脚本：">
                        <pre><code class="language-bash" v-text="oneUrl" id="code2"></code></pre>  
                        <el-button type="info" plain class="btn" data-clipboard-target="#code2" @click="copied"> Copy </el-button>  
                    </el-form-item>
                </el-form>
            </template>
        </div>
        <div class="container">
            <footer>
                <p>A mirror config tool. Made by <a href="https://github.com/AdrianDuan" target="_blank">@AdrianDuan</a> and <a href="https://lisz.io" target="_blank">@zhonger</a>.&nbsp;<a href="https://github.com/shuopensourcecommunity/MirrorConfigGenerator" target="_blank">Help us to improve it</a>!&nbsp; <a href="/repos/help">Help</a></p>
            </footer>
        </div>
    </div>
    <div id="copyright">
        <div class="container">
            <div class="content">
                <p>上海大学开源镜像站是由<a href="http://www.its.shu.edu.cn" target="_blank">上海大学信息化办公室</a>和<a href="http://www.hpcc.shu.edu.cn" target="_blank">上海大学高效能计算中心</a>提供基础设施支持，由<a href="https://nita.shu.edu.cn" target="_blank">上海大学NITA实验室</a>提供服务器支持，由<a href="https://osc.shu.edu.cn" target="_blank">上海大学开源社区</a>负责管理维护。本站所有源均可通过HTTP、FTP和RSYNC方式访问，RSYNC的访问模块名为源的HTTP子目录名。</p>
                <p>上海大学开源社区（SHU Open Source Community）是由上海大学的开源技术爱好者于 2010 年自主发起成立的非营利性学生组织。上海大学开源社区的宗旨是：面向全校师生传播开源理念、分享技术知识；为上海大学的开源技术爱好者提供公共服务，建立开放友好的技术交流平台；弘扬自由软件精神，培养自由软件社区文化氛围，为开源事业做出贡献。    </p>
            </div>
            <div class="logo">上海大学开源社区</div>
            <div class="clear"></div>
        </div>
    </div>
    <script src="/repos/vue.min.js"></script>
    <script src="/repos/axios.js"></script>
    <script src="/repos/element-ui.js"></script>
    <script src="/repos/prism.js"></script>
    <script src="/repos/clipboard.min.js"></script>
    <script src="/repos/jquery.min.js"></script>
    <script src="/repos/jquery.mCustomScrollbar.concat.min.js"></script>
    <script>
        (function($){
            $(window).on("load",function(){
                $("pre").mCustomScrollbar();
            });
        })(jQuery);

        var clipboard = new ClipboardJS('.btn');

        clipboard.on('success', function(e) {
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger:', e.trigger);

            e.clearSelection();
        });

        clipboard.on('error', function(e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });

        var menu = new Vue({
            el: '#menu',
            data: {
                activeIndex: '1'
            }
        })
        var generator = new Vue({
            el: '#generator',
            data: {
                linux: '',
                version: '',
                releases: '',
                ip: 'ipv4',
                baseUrl: '',
                url: '',
                oneurl: '',
                shell: '',
                isos: [],
            },
            created: function() {
                this.loadIsos();
                this.url = this.baseUrl + 'ubuntu';
            },
            methods:{
                loadIsos: function () {
                    axios.get('/repos/data/sources.json')
                    .then(function (response) {
                        generator.baseUrl = response.data.baseUrl;
                        generator.isos = response.data.isos;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                },
                changeLinux: function() {
                    for(var item of this.isos) {
                        if(item.value == this.linux){
                            this.releases = item.children;
                            this.version = '';
							this.shell = item.shell;
                        }		
                    }
                    document.getElementsByClassName('el-input__inner')[1].value = '';
                    this.url = this.baseUrl + this.linux;
                },
                changeReleases: function(){
                    this.url = this.baseUrl + this.linux + "?version=" + this.releases;
                },
                changeIp: function(){
                    this.url = this.baseUrl + this.linux + "?ip=" + this.ip;
                },
                copied: function(){
                    this.$message({
                        showClose: true,
                        message: '复制成功！',
                        type: 'success'
                    });
                }
            },
            computed: {
                downloadUrl: function() {
                    if(this.linux == ''){
                        this.url = this.baseUrl + "ubuntu";
                        if(this.ip == 'ipv4'){
                            this.url = this.url;
                        }else{
                            this.url = this.url + "?ip=" + this.ip;
                        }
                    }else{
                        this.url = this.baseUrl + this.linux;
                        if(this.version == ''){
                            if(this.ip == 'ipv4'){
                                this.url = this.url;
                            }else{
                                this.url = this.url + "?ip=" + this.ip;
                            }
                        }else{
                            this.url = this.url + "?version=" + this.version;
                            if(this.ip == 'ipv4'){
                                this.url = this.url;
                            }else{
                                this.url = this.url + "&ip=" + this.ip;
                            }
                        }
                    }
                    return this.url;
                },
                oneUrl: function() {
                    this.oneurl = "curl " + this.baseUrl;
                    if(this.linux == ''){
                        this.oneurl += "ubuntu";
                        if(this.ip == 'ipv4'){
                            this.oneurl = this.oneurl;
                        }else{
                            this.oneurl +="?ip=" + this.ip;
                        }
                        this.oneurl += ' | sudo tee /etc/apt/sources.list';
                    }else{
                        this.oneurl += this.linux;
                        if(this.version == ''){
                            if(this.ip == 'ipv4'){
                                this.oneurl = this.oneurl;
                            }else{
                                this.oneurl = this.oneurl + "?ip=" + this.ip;
                            }
                        }else{
                            this.oneurl += "?version=" + this.version;
                            if(this.ip == 'ipv4'){
                                this.oneurl = this.oneurl;
                            }else{
                                this.oneurl += "&ip=" + this.ip;
                            }
                        }
						this.oneurl += " | ";
						this.oneurl += this.shell;
                    }
                    return this.oneurl;
                }
            }
        })

    </script>
</body>

</html>
