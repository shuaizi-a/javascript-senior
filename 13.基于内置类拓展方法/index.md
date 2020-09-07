>写在内置类原型上的方法，实例调用的时候："实例.xxx()"
>向内置类原型扩充方法：把一些公共的方法扩展到内置类的原型上，这样调起来方便
+ 案例
```javascript
let arr = [1, 1, 11, 25, 51, 12, 4, 2, 4, 6, 4]

Array.prototype.unique = function(){
    // 保证this是当前要操作的数组
    if( !Array.isArray(this)) throw new TypeError('确保操作的是一个数组')
    return Array.from(new Set(this))
}
```

>this是引用数据类型值

>把对象转换成原始值通过valueof找到原始值，如果有原始值，则直接获取原始值的结果即可，并且可以参与到运算中去，如果没有原始值先转为string类型进行字符串拼接
```javascript
const validateNum = function validateNum(num){
    num = Number(num);
    returb isNaN(num) ? 0 : num;
}

Number.prototype.plus = function(n){
    if( isNaN(this)) throw new TypeError('确保操作的是一个数字')
    n = validateNum(n)
    return this + n
}

Number.prototype.minus = function(n){
    if( isNaN(this)) throw new TypeError('确保操作的是一个数字')
    n = validateNum(n)2
    return this - n
}
```
