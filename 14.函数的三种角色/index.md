## 函数的三种角色
+ 普通函数
    - 闭包作用域
+ 构造函数
    - new
    - 类和实例
+ 普通对象
    - 键值对


#### 案例
```javascript
function Foo(){
    getName = function(){
        console.log(1);
    }
    return this;
}

Foo.getName = function (){
    console.log(2)
}

Foo.prototype.getName = function(){
    console.log(3)
}

var getName = function(){
    console.log(4)
}

function getName(){
    console.log(5)
}

Foo.getName(); // 2
getName();  // 4
Foo().getName(); // 1
getName(); // 1
new Foo.getName(); // 2 
new Foo().getName(); // 3
new new Foo().getName(); // 3
```