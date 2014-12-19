---
layout: "post"
title: "javascript中的工厂模式"
tag: ['javascript']
---
#### 什么是工厂模式？
工厂模式([wiki](http://zh.wikipedia.org/wiki/%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95))就是为重复创建同一类对象带来方便的, 统一管理对象生命周期的一种模式，可以消除大量重复代码。  
在JS中，可以使用类似下面的代码来使用工厂

{% highlight js %}
Complex = new function() {
  function Complex(a, b) {
  }
  this.fromCartesian = function(real, mag) { 
    return new Complex(real, imag);
  }
  this.fromPolar = function(rho, theta) {
    return new Complex(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}
var c = Complex.fromPolar(1, Math.pi);
{% endhighlight %}
