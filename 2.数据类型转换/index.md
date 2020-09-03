# 数据类型转换
## 转Number

```javascript
// 1.特定需要转换为Number的
Number(val)
parseInt/parseFloat(val)

// 2.隐式转换
isNaN(val)
数学运算(特殊情况: +在出现字符串的情况下不是数学运算，是字符串拼接)
// 没有遇到字符串和对象就是数学运算
在==比较的时候，有些值是需要转换为数字再比较的

//只要出现非有效数字字符结果都是NaN
```
```javascript
console.log(Number('')); // 0
console.log(Number('10')); // 10
console.log(Number('10px')); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(Symbol(10))); // 报错
console.log(Number(Bigint(10))); // 10
//对象变数字，先valueOf，没有原始值再toString()变成字符串，最后把字符串转换为数字
console.log(Number([10])) // 10
console.log(Number([])) // NaN
console.log(Number({})) // NaN
```

```javascript
parseInt('')    // NaN
Number('')      // 0
isNsN(null)     // false
parseInt('12px')// 12
Number('12px')  // NaN
isNaN('12px')   // true
parseFloat('1.6px') + parseInt('1.2px') + typeof parseInt(null) //=> '2.6number'
// 1.6 + 1 + number

isNaN(Number(!!Number(parseInt('0.8')))) // false
typeof !parseInt(null) + !isNaN(null) // 'booleantrue'

let result = 10 + false + undefiend + [] + 'Tencent' + null + true + {}
// 10 + false => 10
// 10 + undefiend => NaN
// NaN + [](先转换成字符串再转换成数字) => 'NaN'
// 'NaN' + "Tencent" => 'NaNTencent'
// 'NaNTencent' + nll + true + [object object] => NaNTencentnulltrue[object object]
```
+ parseInt()
  >先变成字符串， 从字符串左边第一个字符开始查找(遇到非有效字符开始停止查找，不论后面是否还有数字字符，都不在找)，把找到的有效数字字符转换为数字，如果一个结果都没有找到结果就是NaN
```javascript
parseInt([val],[radix])
//=>[radix]这个值是一个进制，不写或者写0默认都按照10处理，(如果value是以0x开头，则默认值不是10而是16)
//=> 进制有一个取值的范围；2-36之间，如果不在这之间，整个程序运行的结果一定是NaN
//=> 把[value]看作[radix]进制，最后把[radix]进制转化为10进制
```


## 转String
```javascript
// 1.转string的方法
toString(val)
String(val)

// 2.隐式转换
加号运算的时候，如果某一边出现了字符串，则是字符串拼接
把对象转换为数字。需要先toString()转换为字符串，再去转换为数字
基于alert/confirm/document.write()这些输出方式，都是把内容转换成字符串，然后再输出

// [].toString() ''
// {}.toString()  => [object object]

{} + 10 //=> 10 左边会当成一个代码块，不参与运算
10 + {} // 10[object object]
({}+10) // [object object]10
```

## 转boolean
```javascript
// 1.基于以下方式可以把其他类型的数据转换为布尔 
! 转换为布尔值后取反
!! 转换为布尔类型
Boolean()

// 2.隐式转换
在循环或条件判断中，条件处理的结果就是布尔类型

规则：只有 '0, NaN, null, undefinef, 空字符串'五个值会变成fasle， 其余的都会变成true
```