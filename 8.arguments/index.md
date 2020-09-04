## argument
```javascript
var a = 4;
function b(x, y, a){

  // arguments: [x,y,z] = {0:1,1:2，2:3,length:3} 类数组
  /// arguments会和传过来的形参建立映射机制，当改变任意一处另一方也会改变；

  console.log(a); //3
  arguments[2] = 10;
  console.log(a)  //10
}
a = b(1, 2, 3)
console.log(a) // undefined
```