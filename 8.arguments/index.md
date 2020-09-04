## argument
```javascript
var a = 4;
function b(x, y, a){

  // arguments: [x,y,a] = {0:1,1:2，2:3,length:3} 类数组
  // 在非严格模式下：形参赋值后，arguments会和传过来的形参建立映射机制，当改变任意一处另一方也会改变；
  // 严格模式('use strict')下是没有映射机制的
  console.log(a); //3
  arguments[2] = 10;
  console.log(a)  //10
}
a = b(1, 2, 3)
console.log(a) // undefined
```

```javascript
function fn (x,y,a){
  a = 3;
  console.log(arguments[2]) // undefined
  // arguments: [1, 2]
  // 形参赋值 x = 1; y = 2; a = undefined
  // 映射机制是在函数代码执行之前完成的，那会建立了映射就有隐式，此刻没有建立就不会建立了，后续也不会有了
}
fn(1, 2)
```