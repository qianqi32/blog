# 如何优雅的使用家用Windows电脑开启一个MC服务器与好友联机？

## 前言
首先确保你掌握一些基础的电脑知识，不要在没使用过电脑的情况下直接观看本教程

## 一、配置环境变量

1.首先前往[编程宝库](http://www.codebaoku.com/jdk/jdk-index.html)或者[零依资源站](https://mcres.cn)根据你开启的版本下载相应的JDK，这里我以java17为例
![](https://telegraph-image.pages.dev/file/978eea82c4d1d1d974c31.png)

![](https://telegraph-image.pages.dev/file/06a7af1b1515fd371f5c1.png)  


2.双击运行下载好的jdk文件，点击下一步，选择目录这里可以自己随意选择一个文件夹，不带中文并且保证你能找的就行，这里我不做选择直接下一步，关闭
![](https://telegraph-image.pages.dev/file/25cdb7f0319bc50cda943.png)
![](https://telegraph-image.pages.dev/file/fe1f4ed30ceccf4a2d5cc.png)
![](https://telegraph-image.pages.dev/file/36b34a2512b316d48047c.png)
![](https://telegraph-image.pages.dev/file/bb0b930d1948054bf8a13.png)

3.如图所示，找到jdk下的bin目录然后把整个地址都复制一下
![](https://telegraph-image.pages.dev/file/3a7998c48c67506c6009b.png)

4.使用【Win+i】快捷键打开设置，在搜索框里输入【环境】，选择【编辑系统环境变量】
![](https://telegraph-image.pages.dev/file/9c0d7fee0579ec35c42fa.png)

5.选择【环境变量】
![](https://telegraph-image.pages.dev/file/ca65d5792456004db04aa.png)

6.在【系统变量】这里下拉找到【变量】-【Path】，然后点【编辑】
![](https://telegraph-image.pages.dev/file/0694ea2aaf16a4f639b30.png)

7.点【新建】，然后再最后一行粘贴刚才复制的bin目录，再点确定，一路确定退出
![](https://telegraph-image.pages.dev/file/5e929d54038b8735741ff.png)

8.在桌面使用【Win+R】打开命令运行框，再输入【cmd】打开控制台
![](https://telegraph-image.pages.dev/file/2312d54970f5a2361046e.png)

9.在控制台输入【java -version】查看是否安装成功，如图所示这就说明成功了。如果没成功请自行搜索其他教程
![](https://telegraph-image.pages.dev/file/08b6f0dd90f8200f276cd.png)

## 二、下载服务器文件
10.进入[Minecraft Server](https://fabricmc.net/use/server/)网站，选择你需要的Minecraft版本，我这里选择教程发布为止的最新正式版1.20.4为例，点按钮下载，然后再下面复制启动命令
![](https://telegraph-image.pages.dev/file/24bacd2118ccd75ab56d7.png)

11.为了方便管理我建议把刚刚下载好了的核心丢在一个文件夹里，然后右键新建一个文本文档
![](https://telegraph-image.pages.dev/file/8c8d6a964bd2ae6c126bb.png)

12.名字无所谓，扩展名要改成bat，如果问你是否确认修改选是就行
![](https://telegraph-image.pages.dev/file/a87ae9e04e9d4047b57b9.png)

13.如果看不见扩展名就【查看】-【显示】-【文件扩展名】，勾上
![](https://telegraph-image.pages.dev/file/273c415521ffa0694e98a.png)

14.右键这个bat选择【编辑】或者【在记事本中编辑】
![](https://telegraph-image.pages.dev/file/b2a86816a4c2f3bcf78f9.png)

15.把刚刚复制的启动命令粘贴上，如果你是其他的核心只需要把【fabric-server-mc.1.20.4-loader.0.15.7-launcher.1.0.0.jar】改成【核心名字.jar】就行
![](https://telegraph-image.pages.dev/file/2f5c1a47b281f050ba5e8.png)

## 三、开启服务器

16.双击启动，然后耐心等待，第一次运行较慢因为要下载原版核心
![](https://telegraph-image.pages.dev/file/afa65fd80d3efd45e931a.png)

17.如果没问题的话黑框框就会自动关闭，这时候只需要双击eula.txt把false改成true就行，这是一个协议具体内容感兴趣可以自行了解
![](https://telegraph-image.pages.dev/file/a491d2db746f8d059bd72.png)

18.再次双击bat运行，如图所示这样就没问题了
![](https://telegraph-image.pages.dev/file/4c9163e05f824d8239427.png)

19.进游戏之后添加服务器，服务器地址这里填写【localhost】
![](https://telegraph-image.pages.dev/file/fd2aa8f4ccc31d9770fab.png)

20.这样就成功开启了一个本地服务器
![](https://telegraph-image.pages.dev/file/4a894dc9c5d5bc246531a.png)

21.假设你是离线用户的话需要在server.properties文件把online-mode改成false
![](https://telegraph-image.pages.dev/file/4974a175a63fe5e15a797.png)

23.关于server.properties文件可以去[wiki](https://minecraft.fandom.com/zh/wiki/Server.properties)查看，关于服务器mod和插件的问题都可以通过查对应的文档来解决，推荐大家使用[notepad--](https://gitee.com/cxasm/notepad--/releases/tag/v2.10)进行编辑

## 四、使用frp联机
24.想要进行联机的话可以使用内网穿透，这个因为各种奇奇怪怪的原因【懒癌发作】我就不展开说了，可以在这条视频进行了解。
<iframe src="//player.bilibili.com/player.html?aid=247423358&bvid=BV1Rv41187CN&cid=318916775&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="450px"> </iframe>

## 结尾
这个教程没意外的话到这里就结束了，然后服务器mod和插件之类的这个因人而异，我这里就不展开说了，其实开服最难得地方不是如何开服，而是如何运营维护管理等方面，最后感谢大家的观看，祝大家的服务器越办越好。