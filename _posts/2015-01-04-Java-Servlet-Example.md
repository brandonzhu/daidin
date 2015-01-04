---
title: "一个servlet实例"
layout: "servlet"
tags: ['servlet']
---

一个`Servlet`就是一个普通的Java类并实现下面接口

{% highlight java %}
javax.servlet.Servlet
{% endhighlight %}

实现这个接口简单的方法就是**继承**`GenericServlet`或者`HttpServlet`

{% highlight java %}
import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import java.io.IOException;

public class SimpleServlet extends GenericServlet {

  public void service(ServletRequest request, ServletResponse response)
        throws ServletException, IOException {

       // do something in here
  }
}
{% endhighlight %}

当一个来自客户端的Request到达服务器的时候，命中你的Servlet，并且调用`service()`方法。

`service()`方法读取request，并且为客户端生成响应(例如浏览器)

下面是`service()`实现的例子

{% highlight java %}
public void service(ServletRequest request, ServletResponse response)
        throws ServletException, IOException {

  String yesOrNoParam = request.getParameter("param");

  if("yes".equals(yesOrNoParam) ){

      response.getWriter().write(
        "<html><body>You said yes!</body></html>");
  }

  if("no".equals(yesOrNoParam) ){
    
      response.getWriter().write(
        "<html><body>You said no!</body></html>");
  }
}
{% endhighlight %}

`service()`方法读取请求的参数`param`.然后检查这个参数的值是否等于`yes`或者`no`,根据值响应客户端.
