---
layout: 'post'
title: 'curl 的使用'
tag: ['shell']
---

#### 在mingw中使用curl(64位)
*	下载适合mingw使用的curl,[下载页面](http://curl.haxx.se/download.html),[适合64位的MinGw](http://curl.haxx.se/gknw.net/7.34.0/dist-w64/curl-7.34.0-devel-mingw64.7z)
*	解压出来的文件夹里包含`bin/`和`include/`两个文件夹，把这两个文件夹分别复制到MinGw的下的`bin/`和`include/`

#### 普通的get请求

{% highlight sh %}
curl url
{% endhighlight %}

#### 简单的http验证命令

{% highlight sh %}
curl --user tobi:tobi url
{% endhighlight %}

#### 发送cookie到服务器(会发送一个Cookie的消息头)
{% highlight sh %}
curl localhost:3000 --cookies "Cho=Kim;Greet=Hello"
{% endhighlight %}

#### 查看服务器返回的消息头
{% highlight sh %}
curl http://localhost:3000/ --head
{% endhighlight %}
```

#### 利用application/json的方式给服务器发送消息
{% highlight sh %}
curl -d '{"username":"zhulei"}' localhost:3000 -H "Content-Type:application/json"
{% endhighlight %}
