---
title: 'shell命令'
layout: 'post'
tag: ['shell', 'recommend']
---

{% highlight sh %}
#退回上级目录
cd -
{% endhighlight %}

{% highlight sh %}
#finder命令
find path -name "filname" -ls
find ./ -name "all.log" -ls #在当前目录下查找all.log，并且显示详细信息
{% endhighlight %}

{% highlight sh %}
#ftp命令
ftp #进入ftp命令操作行
open host [port] #进行ftp连接
get filename #下载文件
put filename #上传文件
{% endhighlight %}

{% highlight sh %}
#telnet命令
telnet host #连接远程计算机
{% endhighlight  %}

{% highlight sh %}
#ssh
ssh host -l username #通过username登陆远程计算机
{% endhighlight  %}
