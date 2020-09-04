
## 案例解析
```javascript
let x = 5;
function fn(x){
	return fuction(y){
		console.log(y + (++x))
	}
}

let f = fn(6)
f(7)           //=> 14
fn(8)(9)       //=> 18
f(10)          //=> 18
console.log(x) //=> 5

```
> 一般情况下：函数执行完成之后，所执行的私有上下文都会出栈释放，私有上下文中的一切内容都会被销毁，优化栈内存空间

> 特殊情况：如果函数执行所形成的上下文当中，有一个东西（一般型的空间的地址）被当前上下文以以外的事物所占用，那么当前上下文是不能被出栈释放的，上下文中的信息保留下来(包含私有变量值)，导致栈内存空间变大

```javascript
let a = 0,
    b = 0;

function A(a){
    A = function(b){
        alert(a + b++)
    }
    alert(a++)
}

A(1)  //=> 1
A(2)  //=> 4 此刻内部的A被提出来了覆盖掉了外部的A，A里面的a变成了私有变量不会被释放
```

>匿名函数具名化(设置了名字)

>1.设置的名字只能函数体内使用，外部无法访问到（基于这种房子代替严格模式下不兼容arguments.callee,并且实现递归算法）

>2.在函数内部去修改这个名字值，默认是不能修改的，代表的依然是函数本身(除非这个函数名字在函数体内被重新赋值过，重新声明后，一切都按照新声明的为主)
```javascript
(function fn(){
    console.log(fn) // 函数体
})()
console.log(fn)// 报错
```
```javascript
var fn = 10
(function fn(){
    var fn = 20
    console.log(fn) // 20
})()
console.log(fn)// 10
```

## 套娃提
```javascript
function fun(n, o) {
    console.log(o) // undefined 0 1 1
    return {
        fun: function (m) {
            return fun(m, n)
        }
    }
}
var c = fun(0).fun(1);
c.fun(2);
c.fun(3); 
```

![avatar](bbtj.bmp)
![avatar](almst.bmp)