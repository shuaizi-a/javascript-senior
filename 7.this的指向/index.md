## 什么是this
> this：函数的执行主体，和执行上下文不是一回事，全局的this指向window，我们研究的都是函数中的this,this是谁和函数在哪执行，以及在哪定义都没有必要的联系

## js中this的五种情况分析 （this规律）
+ 1.给当前元素的某个事件行为绑定方法，事件触发，执行对应的方法，方法中的this是当前的元素本身
```javascript
document.body.onclick = function (){
  //this: body
  // IE6~8: window
}
```

+ 2.函数执行
>首先看函数名之前是否有'点',有'点'，'点'前面就的this就是谁，没有'点'this就是window(在js的严格模式下，this是undefined),立即执行函数一般都是window，回调函数中的this一般都是window/undefined,除非特殊处理,不管是匿名函数还是回调函数一般this是window/undefined
```javascript
(function(){
  console.log(this) // window
})()

function fn(){
  console.log(this) // window
}
fn()

let obj = {
  name: 'xxx',
  fn(){
    console.log(this) // obj
  }
}
obj.fn()
```

+ 3.构造函数中的this是当前类的实例
```javascript
function fn() {
  this.x = 100
}
fn.prototype.sun = function(){...};
fn() // this => window
let f = new fn() // this => f
f.sun(); // this => f
f.__proto__.sun(); // this => f.__proto__
```

+ 4.箭头函数(没有自己的this)
>箭头函数或{}形成的上下文，用到的this都是当前上下文中的this
```javascript
let obj = {
    name: 'shuaizi',
    fn(){
      // 箭头函数中的this是上级的this
      setTimeout(() => {
        console.log(this)
      }, 100)    
    }
}
obj.fn()
obj.fs()
```

+ 5.基于call、apply、bind可以强制改变this的指向
  - call() / apply
  ```javascript
  cosnt fn = function(){
    
    console.log(this.name)
  }
  window.name = '珠峰'
  let obj = {
    name: '帅子',
    fn:fn
  };  
  fn.call(obj)
  // call()不传参，默认this指向window，严格模式下指向window
  ```
  >call和apply的区别: call是把参一个一个的传过去，apply是把参放到一个数组内传递过去
  - bind()
  >预先处理：预先把函数中需要改变的this等信息存储起来，但是函数并不会执行，执行bind会返回一个匿名函数，当后期执行匿名函数的时候，再去把之前需要执行的函数执行，并且改变this为预设的值
  ```javascript
  function fn() {
    console.log(this.name)
  }
  let obj = {
    name: '帅子',
  };  

  setTimeout(fn.bind(obj), 100)
  ```

## 案例
```javascript
var num = 10;
var obj = {
  num: 20
}

obj.fn = (function(num){
  this.num = num*3;
  num++;
  return function (n){
    this.num = num*3;
    num++;
  }
})(obj.num)

var fn = boj.fn;
fn(5);
obj.fn(10);
console.log(num, obj.num)  // 65 30
```

```javascript
let obj = {
  // fn等于return出去的小函数
  fn: (function (){
    return function (){
      console.log(this)
    }
  })()
}

obj.fn() // this => obj
let fn = obj.fn
fn() // this => window
```

```javascript
var fullName = 'shuaizi';
var obj = {
  fullName: 'javascript',
  prop: {
    getFullName(){
      return this.fullName
    }
  }
}

console.log(obj.prop.getFullName()) // thsi => prop => undefined

var test = obj.prop.getFullName();
console.log(test) // thsi => window => shuaizi
```

```javascript
(function(){
  var val = 1;
  var json = {
    val: 10,
    dbl: function(){
      val *= 2;
      // this => json
      // json内的val是变量名，不是自己的私有变量，
    }
  }
  json.dbl()
  alert(json.val +val); //=> 12
})()
```
