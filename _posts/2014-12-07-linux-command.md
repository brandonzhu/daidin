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

{% highlight sh %}
#jar(.jar/.war/.ear)
#创建一个jar
jar cvf test.jar * #打包当前目录下的所有文件
jar cvf test.jar -C class . #打包当前的class文件夹
jar tvf test.jar #查看包内容
jar xvf test.jar #解压全部的包
jar xvf test.jar test/test.class #只解压包内test目录下的test.class
jar uvf test.jar test/test.class #更新包内的test/test.class
7z d test.jar test/test.class #删除包内的test/test.class
{% endhighlight  %}
