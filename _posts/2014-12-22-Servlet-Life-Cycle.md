---
title: 'Servlet生命周期'
layout: 'servlet'
tags: ['servlet']
---

[加载Servlet类](#load-servlet-class)

[创建Servlet实例](#create-servlet-instance)

[调用init()方法](#init)

[调用service()方法](#service)

[调用destroy()方法](#destroy)


----

Servlet的生命周期如下所示。Servlet的生命周期是被Servlet容器管理的。  

1.	加载Servlet类
2.	创建Servlet实例
3.	调用init()方法
4.	调用service()方法
5.	调用destroy()方法

第1，2，3步只会被调用一次，当Servlet被容器初始化的时候。Servlet默认不会加载直到它的第一个请求被容器检查到。你可以强制容器在启动的时候加载`Servlet`. 详细请看[web.xml servlet Configuration]().

第4步可以被重复调用，每次请求都被调用一次。
第5步会在容器不需要`Servlet`的时候调用。

详细如下图所示
![](http://tutorials.jenkov.com/images/java-servlets/life-cycle.png)

----

#### <a name="load-servlet-class"></a>加载Servlet类。

在Servlet可以被调用之前，一定要被容器加载，就像其它普通的类一样。

----

#### <a name="create-service-instance"></a>创建Servlet实例

当Servlet加载后，Servlet容器会创建一个Servlet实例对象。

实际上，只有一个Servlet实例对象会被创建，`servlet`的并发请求，其实都是在请求同一个Servlet对象. 这是由servlet容器决定的。但大部分情况下，只会有一个实例。

----

#### <a href="init"></a>调用init()方法
在servlet实例被创建的时候，init()方法会被调用。init()方法负责在处理第一个请求之前，servlet的初始化.

你可以在web.xml里初始化servlet的参数.详情请看[web.xml Servlet Configuration](http://tutorials.jenkov.com/java-servlets/web-xml.html#initParams)

----

#### <a name="service"></a>调用service()方法
对于servlet的每个请求，service()方法都会被调用。对于`HttpServlet`子类，`doGet`或者`doPost`方法会被调用。

一旦servlet在容器中被激活，service()方法就可以被调用了。另外，这个方法可以被重复调用

----

#### <a name="destroy"></a>调用destroy()方法
当一个servlet不被容器需要的时候，`destroy()`方法会被调用。这个方法只会被调用一次。

这里所谓不被需要的情况包括，容器停止运行，或者重启整个web工程。

[下一篇]()
