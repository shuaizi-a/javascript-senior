## 变量提升案例
```javascript
console.log(a,b,c) //undefined undefined undefined
var a = 12,
    b = 13,
    c = 14;
function fn(a){
  console.log(a)  //10 13 14
  a = 100;
  c = 200;
  console.log(a,b,c) //100 13 200
}
b = fn(10)
console.log(a,b,c) 12 undefined 200
```
```javascript
var i = 0;
function A(){
  var i = 10;
  function x(){
    console.log(i)
  }
  return x;
}

var y = A()
y()  // 10

function B(){
  var i = 20;
  y() // 10
}
B()

// 函数执行他的上级上下文是谁和函数在哪执行没有直接关系，在哪定义的函数他的上级上下文就在哪
```
```javascript
var a = 1;
var obj = {
    name: 'tome'
}

function fn(){
  var a2 = a;
  obj2 = obj;
  a2 = a;
  obj2.name = 'jack'
}
fn();
console.log(a) // => 1
console.log(obj) // => {name:'jack'}
```

```javascript
var a = 1;
function fn(a){
  console.log(a)
  var a = 2; // 变量提升，有相同的变量名已赋值就不需要变量提升，代码走到这才会重新赋值
  function a(){}; // 不需要重新声明，但是需要重新赋值 
  console.log(a); // 2
}
fn(a)
```

```javascript
var foo = 'hello';
(function(foo){
  console.log(foo) // hello

  // A||B： A的值为真时，返回A的值否则返回是B值
  // A&&B： A的值为真时，返回B的值否则返回A的值
  // 同时出现，&&优先于||
  var foo = foo || 'world'
  console.log(foo) // hello
})(foo)
console.log(foo) // hello
```
```javascript
{
  function foo(){}
  foo = 1;
}

console.log(foo) // 函数体

// ------------------------------------------

{
  function foo(){}
  foo = 1;
  function foo(){}
}

console.log(foo) // 1


// ------------------------------------------

{
  function foo(){}
  foo = 1;
  function foo(){}
  foo = 2;
  console.log(foo) //2
}

console.log(foo) // 1
```

```javascript
var x = 1;
function func(x,y=function anonymousl(){x = 2}){
  x = 3;
  y();
  console.log(x) // => 2
}
console.log(x) // => 1


// -----------------------------------------------------

var x = 1;
function func(x,y=function anonymousl(){x = 2}){
  var x = 3;
  y();
  console.log(x) // => 3
}
console.log(x) // => 1

// 函数执行；
// 条件1：有形参赋值默认值（不论是否传递参数，也不论默认值的类型）
// 条件2: 函数体中有变量声明（必须是基于let、const、val，注意let、var不能·重复声明变量，不能和形参变量名一致）这样的话，除了默认形成的函数私有上下文，还会多创建一个‘块级上下文（函数体到括号包起来的）
```