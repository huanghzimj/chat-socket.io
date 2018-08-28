## SKY
 #一个仿qq聊天的软件，基于node.js socket.io ,聊天记录用 mysql保存实现.



## 这是基于socket.io的聊天系统。

个人纯碎为了练习nodejs+socket.io 而做出来的一个系统，给个Star就是我最大的动力！
#
```
 安装依赖  npm install 
 
 # 启动mysql 
 
 
 
```






## 用Node.JS+socket.io+mysql 搭建socket.io的聊天系统逐行代码分析：


## 技术选型：

* 后台：采用Express作为框架 MYSQL作为数据库   

* 前台：采用jQuery vue.js作为前端UI框架
 
## 功能

* 文章：群聊消息发送，查看聊天记录，等

## 目录结构：

```
---- 
node_modules 项目依赖包

app.js 入口文件
package.json 文件依赖配置包
```



第一步：

安装依赖包

```
  # npm install
   #  node app.js
```


## Install

##### 安装本系统前要先安装node环境和mysql数据库，具体安装请自行Google。

##### 作为例子，我已经一些数据可提供使用，新建数据库chat.数据表自动创建。
第二步：

# 打开  index.html配置连接socket 服务器地址 
# 默认 是 localhost:3000/
```

#  var socket=io.connect('http://localhost:3001/');//与服务器进行


```

第三步：

```
# 发送消息
```

## 图片如下


# 首次进入设置聊天用户名

![](https://raw.githubusercontent.com/huanghzimj/chat-socket.io/master/dd/index.png)

#### 聊天记录

![](https://raw.githubusercontent.com/huanghzimj/chat-socket.io/master/dd/se.png)



