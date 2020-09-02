## 声明变量的五种方法
>var function 传统

>let const import ES6

>let和const声明的都是变量，const声明的变量不允许改变； = 赋值的本身就是指针关联或者指针指向的过程

## var vs let
>var/function的存在变量提升而let/const不存在变量提升机制,在相同的上下文中，let不允许重复声明

```javascript
console.log(a) // undefinend
//var n； 变量提升
var n = '123'

console.log(m)// 报错
//没有变量提升
let m = 12


fn() // 可以执行不会报错
function(){
  console.log('123456')
}


//fn1() // 报错
const fn1 = function(){
  console.log('123456')
}
fn1() // 正常执行
```

>function 进入到大括号中此刻会在当前大括号内生成一个私有上下文，私有上下文中的都要交上去也是变量提升，他会把函数声明并定义

```javascript
console.log(fn) // undefined, 老版本中还是函数代码字符串
if(1 == 1){
  console.log(fn) // => 函数代码字符串
  function fn(){
    console.log('ok')
  }
  fn = 12
  console.log(fn) // => 12
}
console.log(fu) // 函数代码字符串
```