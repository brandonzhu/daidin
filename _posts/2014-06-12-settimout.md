---
layout: "post"
title: "setTimout, setInterval in javascript, 同步与异步"
tag: ['javascript']
---

**setTimeout**: *让程序进入等候队列，暂缓执行，但是后续方法会继续执行*[mdn上的解释](https://developer.mozilla.org/en-US/docs/Web/API/Window.setTimeout)

{% highlight js %}  
var interval = 1000;
setTimeout(function(){
	console.log("ya, timeout");
}, interval*2);//隔2ms后执行
{% endhighlight %}

**setInterval**: *让程序进入循环操作，但是程序是异步执行*[mdn上的解释](https://developer.mozilla.org/en-US/docs/Web/API/Window.setInterval)

{% highlight js %}  
var interval = 1000;
setInterval(function(){
	console.log("ya, timeout");
}, interval*2);//每2ms执行一次,异步
{% endhighlight %}

**怎么证明setInterval里面的代码会是异步执行？**

{% highlight js %}  
//假如不是异步执行，会看到aa计时器会以8ms递增.但是实际的情况是aa在第一次不是2ms,后面都是2ms递增
var interval = 1000;
console.time("aa");
setInterval(function(){
	(function  my_async_function(){
		setTimeout(function(){
			console.log("test");
			console.timeEnd("aa");
		},interval*6);
	})();
},2000);
{% endhighlight %}

**应该怎么解决这个问题?**

{% highlight js %}
//在这里面，我们通过setTimeout加上回调方法来解决这个问题
//运行程序，会发现bb计时器会完美的以11ms递增，实现了单线的执行程序且循环执行
var interval = 1000;
console.time("bb");
(function  schedule()  {
	setTimeout(function  do_it()  {
		setTimeout(function() {
			console.log("async content");
			schedule();
			console.timeEnd("bb");
		}, interval*6);
	}, interval*5);
}());
{% endhighlight %}

