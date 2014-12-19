---
layout: "post"
title: "Js中的单例模式"
tag: ['javascript']
---

其实从一些基础语言来看一些编程模式，会看得更清楚一些。如在js中也是有**开发者模式**, **构造函数模式**, **单例模式**,下面就记录下学习的**单例模式**过程。
其实js中的模式只是通过代码来模拟，比如**单例模式**可以通过以下代码来模拟.

{% highlight js %}
  function MySingletonClass() {
    if (arguments.callee._singletonInstance) {
      return arguments.callee._singletonInstance;
    };
    arguments.callee._singletonInstance = this;

    this.Foo = function(name) {
      console.log(name);
    };

    this.test = function() {
      console.log("s");
    }
  }
  var a = new MySingletonClass();
  var b = new MySingletonClass();
  console.log(a == b);//这里返回的是true，所以验证了单例的实现
{% endhighlight %}

以上代码最重要的是**arguments.callee**这个内置对象,这个对象其实在函数内部而代表该函数本身,[mdn上的解释](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments/callee)

##### 这里为什么要使用arguments.callee可以实现这个功能？ #####
arguments.callee对于每个函数都会有只有一个，而且对这个对象加上属性不会影响到函数本身，如上面的代码`arguments.callee._singletonInstance`,虽然加上了*_singletonInstance* 这个属性，但是打印出a,或者b对象的时候，会发现根本没有 *_singletonInstance* 这个属性.
