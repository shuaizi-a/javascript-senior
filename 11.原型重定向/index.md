## 原型重定向
```javascript
function Fun() {
    this.a = 0;
    this.b = function(){
        alert(a);
    }
}

// 原型重定向到一个新对象
Fun.prototype = {
    b:function(){
        this.a = 20;
        alert(this.a);
    },
    c:function(){
        this.a = 30;
        alert(this.a);
    }
}

let my_fun = new Fun();
my_fun.b() // 0
my_fun.c() // 30
```
#### 原型重定向
+ 为什么重定向  
    - 为了方便批量给原型上扩充属性和方法
+ 带来的问题
    - 定向到新的原型对象上，没有constructor属性，结构不完整
    - 浏览器默认生成的原型对象因为缺少引用会被释放掉，可能导致以前加入的属性或方法丢失
    - 解决方法
    ```javascript
    Fn.prototype = {
        constructor: Fn,
        getx(){...},
        gety(){...},
    }

    // 或

    Fn.prototype = Object.assign(Fn.prototype,{
        getx(){...},
        gety(){...},
        getz(){...}
    })
    ```
> 内置类的原型是不允许重定向的，就怕把内置的方法全干没了