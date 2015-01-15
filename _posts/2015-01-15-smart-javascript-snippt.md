---
title: '很漂亮的代码片断'
layout: 'post'
tag: ['javascript']
---

每当写一段代码的时候，都需要问自己，这个是最后的选择嘛？还有更好的办法嘛，一切都有改进的可能，无论是从代码结构或者代码算法，都有更好的选择。下面是一些很漂亮的代码.

1.**把一个ip地址变为32位的二进制，并把这个二进制转换为整数(由于ip地址最大可以是255，所以需要一个段位就可以有8个字节)**

{% highlight javascript %}
//把Ip地址转换成32字节的二进制，然后再转换为整数
function ipToInt32(ip) {
  return ip.split('.').reduce(function (int, v) {
    return int * 256 + +v
  },0)
}

console.log(ipToInt32('128.32.10.1'));//2149583361
{% endhighlight %}
