## 什么是this
> this：函数的执行主体，和执行上下文不是一回事，全局的this指向window，我们研究的都是函数中的this,this是谁和函数在哪执行，以及在哪定义都没有必要的联系

## this规律：
>1.给当前元素的某个事件行为绑定方法，事件触发，执行对应的方法，方法中的this是当前的元素本身
```javascript
document.body.onclick = function (){
  //this: body
  // IE6~8: window
}
```

>2.函数执行，首先看函数名之前是否有'点',有'点'，'点'前面就的this就是谁，没有'点'this就是window(在js的严格模式下，this是undefined),立即执行函数一般都是window，回调函数中的this一般都是window/undefined,除非特殊处理
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

>3.构造函数中的this是当前类的实例

>4.箭头函数没有自己的this，用到的this都是当前上下文中的this

>5.基于call、appluy、bind可以强制改变this的指向

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