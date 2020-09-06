## 原型prototype和原型链__proto__
+ 1.所有的类都是函数类型的(包含内置类)
    - 所有的函数天生都自带一个属性：prototype原型
    - prototype的属性值默认是一个对象数据类型
    - 在对象中存储的是供实例能调用的公共属性和方法
    - 并且在类的原型对象上有一个属性constructor构造函数，属性是当前类本身
+ 所有的对象类型值也天生自带一个属性：__proto__原型链
    - __proto__属性的属性值：当前实例所属类的原型prototype
    + 都有哪些值是对象数据类型值
        - 普通对象/数组对象/正则对象/日期对象/类数组对象/DOM对象...
        - 大部分实例(除基本数据类型外)也是对象
        - 类的原型prototype也是对象类型的
        - 函数也是对象  '函数的三种角色'
        - 万物皆对象，所有的类型值都是对象类型的+
```javascript
function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function (){
        console.log(this.x)
    }
}

Fn.prototype.getX = function() {
    console.log(this.x)
}

Fn.prototype.getX = function() {
    console.log(this.y)
}

let f1 = new Fn;
let f2 = new fn;

console.log(Fn.prototype.__proto__ == f1.__proto__.__proto__) // true
console.log(Fn.prototype == f1.__proto__) // true
console.log(Fn.prototype.__proto__ == f1.__proto__) // false
```