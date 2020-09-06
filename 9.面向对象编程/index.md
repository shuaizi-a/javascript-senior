# 面向对象编程
+ OOP面向对象编程
    - javascript
    - java
    - php
    - C#
    + Python
+ POP面向过程
    - C


+ 面向对象三大概念
    - 对象
        > 万物皆对象
    - 类
        > 对象的细分
    - 实例
        > 某一个类别中具体的实例

## new执行的特点
>1.和普通函数执行一样，形成私有上下文，作用域链

>2.new函数执行之前，会在代码执行之前，创建一个对象，初始化this，让this指向创建的对象，代码中遇到this.xxx = xxx都是给创建的实例对象设置私有的属性方法

>3.如果没有写return 默认把创建的对象返回，如果写了return，返回的是基本类型值，也不以自己为主，返回的函数创建的这个对象，自己返回的是引用类型的值，则以自己返回的值为主

```javascript
function Fn(x, y){
    let str = `珠峰培训`;
    this.total = x + y;
    this.say = function(){
        console.log('ok')
    }
}
let f1 = new Fn(10, 20)
console.log(f1)
console.log(f1.total); // 30
console.log(f1.say); // 函数
console.log(f1.str); // undefined str是私有上下文上的私有变量，和实例没有关系， this.xxx = xxx 才是实例上的私有属性方法;

let f2 = new Fn;
console.log(f2.total); // NaN
console.log(f2.say); // 函数
console.log(f2.str); // undefined str是私有上下文上的私有变量，和实例没有关系， this.xxx = xxx 才是实例上的私有属性方法;
//这样Fn也会和上面一样执行
// new Fn(); 带参数列表的new 优先级19
// new Fn； 不带参数列表的new 优先级18
// 最后Fn都会执行，而且都会创造这个类的实例，区别：是否传参，运算优先级不一样

f1 == f2 // false, 每一次new类创建的实例都是独立的实例对象，这种方式属于构造函数模式
```

#### 检测是否属于某个实例 instanceof (可以通过这个方法检测数据类型， 有坑，慎用)
```javascript
f1 instanceof Fn // true
```

#### 检测当前属性是否属于这个对象 in操作符(不管是私有的还是公有的，只有有检测结果就是true)，以及是否为他的私有属性 hasOwnProperty（必须是私有的，公有的不算）
> 所有的实例对象（除去基本类型以外）都是对象类型 （最后都是object的一个实例）

> 可以通过使用Object.prototype提供的hasOwnProperty来检测某个属性是否为对象的一个所有属性
```javascript
'say' in f1 // true 
'str' in f1 // true 

f1.hasOwnProperty('say'); // true
```
