# 基本数据类型(原始类型值)
## 数字 number NAN/Infinity
```javascript
NAN：not a number 不是一个有效的数字，但它属于number数据类型
console.log(typeof NaN)  //=> 'number'
console.log(NaN === NaN) //=> false NaN 不等于 NaN
let n = 10;
if(isNaN(n)){
   // 条件成立，证明它不是一个有效数字
}

//Object.is([val],[val]) :检测两个值是否相同(特殊照顾NaN)
//console.log(Object.js(NaN,NaN)) //=> true
```

## 字符串 string 
```javascript
// 单引号''/双引号""/反引号``
```

## 布尔值 boolean
```javascript
//true/false
```

## null
## undefiend

## symbol
```javascript
// 唯一值
console.log(Symbol("AA") == Symbol("AA")) // => false

let val = Symbol('00')
console.log(val == val) // => true

//Symbol每执行一次创建一次新的唯一值
```

## bigint
```javascript
//超过最大值加bigint 在数值后面加个n就是bigint类型了

```

# 引用数据类型
## object
- {} 普通对象
- [] 数组对象
- /[0-9a-zA-Z]/ 正则表达式
- Date 日期对象


## function



## 为啥分成两大类型，两种类型有什么区别
>普通类型的值会存放到栈内存中

>引用类型的不会存储在栈内存中，它会开辟一个堆内存，用来存储自己的键值对，每一个堆内存都有一个16进制的地址，在堆内存中分别存储键值对，把16进制的地址放到栈中，供变量调用


#### 案例
```javascript
var a = 12;
var b = a;
b = 13
console.log(a) //=> 12
```
```javascript
var a = {
    n: 12
};
var b = a;
b.n = 13;
console.log(a.n) //=> 13
```
```javascript
var a = {
    n: 12
};
var b = a;
b = {
    n: 13
};
console.log(a.n) //=> 12
```

```javascript
var a = {},
    b = '0',
    c = 0;
a[b] = '珠峰'
a[c] = '培训'
console.log(a[b]) //=> 培训

//属性名除了symbol只能是字符串
```

```javascript
var a = {},
    b = Symbol('1'),
    c = Symbol('1'); // b !== c 唯一值
a[b] = '珠峰'
a[c] = '培训'
console.log(a[b]) //=> 珠峰
```

```javascript
var a = {},
    b = {
        n:'1'
    },
    c = {
        n:'2'
    }; 
a[b] = '珠峰'
a[c] = '培训'
console.log(a[b]) //=> 培训
//对于普通对象来说，属性名不能是引用类型，设置为对象也会转换成字符串 ['object object']
```

```javascript
var a = {
    n:1
}
var b = a;
a.x = a = {
    n:2
}

console.log(a.x) // undefined
console.log(b)

// b = {
//     n:1,
//     x:{
//         n:2
//     }
// }

// a = {
//     n:2
// }
```

>在全局上下文中，基于var/function声明的全局变量，也会给GO(window)中新增一个私有的属性，并且和全局变量有映射机制，一个修改另一个也会修改
```javascript
var a = 10; //1.声名一个全局变量a=10，2:给window新增一个window.a = 10
console.log(a) //首先看a是否为全局变量，如果是按照全局变量处理，如果不是全局变量，再看是否为window的一个属性，如果也不是window的属性则会报错: a is not defined
console.log(window.a); //直接访问对象成员
```
>基于let/const声明的全局变量和window没有关系
```javascript
let a = 10; //全局变量a
console.log(a); //10
console.log(window.a) // undefined
```
>在全局上下文中
```javascript
a = 10; //不是全局变量, window.a = 10,相当于省略了window(前提：确认之前没有声明过)

// 带声明的关键字和不带是不一样的机制
```