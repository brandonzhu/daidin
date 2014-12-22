---
layout: 'servlet'
title: 'Servlet OverView'
tag: ['servlet']
---

[什么是servlet](#servlet)  
[Request和Response](#request)  
[Servlet容器](#container)  

----

#### <a name="servlet"></a>什么是servlet?

一个`Java Servlet`是用来响应HTTP请求的对象。它在Servlet容器中运行，如下图所示
![](http://tutorials.jenkov.com/images/java-servlets/overview.png)

Servlet是Web项目的一部分。一个容器可以同时运行多个项目，每个项目可以有多个`Servlet`。如下图
![](http://tutorials.jenkov.com/images/java-servlets/overview-2.png)

一个Web项目当然也包含别的一些组件。例如`Java Server Pages(JSP)`, `Java Server Faces(JSF)`和`Web Services`.这里主要讲的是`Servlet`.

----

#### <a name="request"></a>Request和Response

浏览器发送一个HTTP请求给Web服务器。Web服务器检查是否请求`Servlet`.然后把请求发送到`Servlet`,然后容器会发现请求的`Servlet`.通过调用`Servlet.service()`来激活Servlet.

一旦Servlet被请求激活（通过调用service()方法）,servlet处理请求，然后生成`response`, `response`返回到浏览器中。

----

#### <a name="container"></a>Servlet容器

`Servlet`容器通常运行在Web服务器中(在这里，我认为所谓的容器也可以理解为Tomcat之类的服务器,只不过服务器可以包含多个容器)。例如下面一些常用

*	[Jetty](http://jetty.codehaus.org/jetty/)
*	[Tomcat](http://tomcat.apache.org/)

**[下一篇]()**
