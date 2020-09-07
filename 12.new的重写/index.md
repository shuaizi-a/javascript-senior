## new的重写
```javascript
function _new(Func, ...parse){
    // 创建一个实例对象
    // let obj = {}
    // obj.__proto__ = Func.prototype;

    // 优化
    Object.create(Func.prototype)

    // 把类当作普通函数执行：基于call方法改变上下文中this的指向是创建的实例对象obj
    let result = func.call(obj,...parse);

    // 根据返回的结果，决定返回啥
    if(result !== null && /^(object|function)$/i.test(result)) return result;
    return obj;
}
```

## Object.create()的实现
```javascript
Object.create = function create(obj){
    if(obj === null || typeof obj !== 'object'){
        throw new TypeError('object prototype may only be an Object')
    }

    function Anonymous(){}
    Anonymous.prototype = obj;
    return new Anonymous;
}
```