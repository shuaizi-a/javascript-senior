##vsc 快捷键

```javscript
shift + alt + A 块注释

shift + alt + F代格式化 

ctrl + k + 0 代码收起

ctrl + K + j 代码展开
```

##.md文档使用

<https://maxiang.io/> 

## 浏览器常用内核

```html
webkit
pecko
presto
trident
```

###js笔记

#ECMAScript3/5/6

##变量(variable)

```javascript
//ES3 创建变量
var a = 12
console.log(a) //=> 输出变量

//ES6 创建变量
let b = 100

// 常量
const c = 100
//const 创建的变量，存储的值不能被修改(可以理解为常量)

//创建函数也相当于创建变量
function fn(){}

//创建类也相当于创建变量 ES6创建变量的方法
class A{}

//ES6的模块导入也相当于创建变量
import B from './B.js' 

//唯一值
Symbol d = 100
//基本不用
```

##浏览器中常用的输出方式
```javascript
//1.控制台輸出
let a = 10;
//console.log(a) => 在控制台中输出值
//console.dir(a) => 在控制台中输出详细的键值对信息
let b = [
  {id:1,name:'shuaizi'},
  {id:2,name:'xiaozhang'}
]
//console.table(a) => 在控制台中输出一个多维JSON数组的方式呈现出来

//2.浏览器弹窗
alert(123)
consfirm('确定要删除吗') //会返回 true 和 false
prompt(确定要干啥？写出原因) //返回文本值
//=>三种方式输出的结果都必先经过toString转换为字符串
//这三种方式会阻断js代码执行，只有关掉窗口， js才会继续执行

//3.document.write()
//在页面中写入信息 => 输出的结果都是字符串
```

##js引入html页面位置问题
>放在HTML头部可能会出现获取不到需要操作DOM节点的问题
>尽量放到 body 结尾的位置
>如果非要放到头部可以这样写 width.onload = function () {}

##js中的命名规范

- 严格区分大小写
```javascript
let Test = 100
console.log(test) //=> 无法输出,因为第一个字母小写了
```
- 使用数字、字母、下划线、$, 数字不能作为开头
```javascript
let $box // => 一般用JQ获取的以$开头
let _box // => 一般公共变量都是以_开头
```
- 使用驼峰命名法: 首字母小写,其余每一个有意义的单词首字母都要大写 (命名尽可能语义化明显,使用英文单词)
```javascript
//驼峰命名法
let studentInformattion

//常见的缩写: 
add/insert/create/new(新增) | updata(修改) | delete(删除)/del/remove/rm | sel/select/queryget(查询) | info(信息)
```
- 不能使用关键字和保留字

##js中常用的数据类型

####基本数据类型


  + 数字number: 常规数字 和 NaN 
    + //NaN : not a number 不是一个数,但他属于数字类型; Nan和任何数都不相等包括他自己

    + // isNan: 检查一个值是否为非有效数字,如果不是有效数字返回 true ,是有效数字者返回 false
      >isNaN('AA') //字符串 true 
      >isNaN(10) //数字 false
      >isNaN('10') //false 
      >
      >isNaN(NaN) //=> true => 1
      >
      >// 在使用isNAN检测的时候 检测的值是否为数字类型 不是先基于Number()这个方法 把值转换为数字类型 然后再检测 

    + 把其他类型值转换为数字类型
      - Number(字符串转数字)
        ```javascript
        console.log(Number('12.5') // => 12.5
        console.log(Number('12.5px') // => NaN
        console.log(Number('12.5.5') // => NaN
        console.log(Number('') // => 0
        ```
        >//把字符串转换为数字 只要字符串包含任意一个非有效数字字符(第一个点除外) 结果都是NaN / 空字符串会变为 0

      - 布尔转为数字
        ```javascript
        console.log(Number(true)) //=>1
        console.log(Number(false)) //=>0
        
        console.log(Number(null)) //=>0
        console.log(Number(undefiled)) //=>NaN
        ```

        >//把引用数据转换为数字，先把他基于toString方法转为字符串，然后再转换为数字
        
        ```javascript
        console.log(Number({name:'10'})) //=> "{object,object}" =>NaN
        console.log(Number({})) //=> "object" => NaN
        console.log(Number([])) //=>0
        console.log(Number([12])) //=>12
        console.log(Number({[12,23])) //=>NaN
        ```

      - parseInt() / parseFloat()
        ```javascript
        parseInt(整数) / parseFloat(小数) 先转为字符串
        console.log(parseInt('12.5px')) //=>12
        console.log(parseFloat('12.5px')) //=>12.5
        console.log(parseFloat('width:12.5px')) //=>NaN
        ```
        >如果传入的参数为字符串，则则从第0个位置开始，找到第一个非空格字符，如果第一个非空格字符不是数字或-号，则返回NaN,如果是数字或-号，则继续往下寻找，直到找到非数字字符，然后忽略后面的内容，返回前面找到的数字值(前导的空格会被忽略，中间的空格则会当成非数字字符处理)


  + 字符串string: 所有用单引号、双引号、反引号 包起来的都是 字符串
    + 把其他类型值转换为字符串
      - [val].toScring() 
        > //toString的基本规律谁使用它就在他身上包一层双引号 / 基本类型值不能直接调 会报错 / 除一种方法除外 普通对象 结果为 "[object,object]" / object.prototype.toString方法 不是转换字符串的，而是用来检测数据类型的
        >
        > //null 和 undefined 禁止直接 toString的 会报错 / 但是和undefined一样转为字符串的结果就是 'null' / 'ubdefind
      - 字符串拼接
        ````javascript
        console.log('10' + 10) //=> 1010
        console.log(10 + undefined) //=> NaN
        console.log('10px' + 10) //=> 10px10 // 遇到不正常的类型 ，结果也会不正常
        // 四则算法中, 除加法除外，其余都是数字计算, 只有加法存在字符串拼接 (一旦遇到字符串,则不是数学运算，而是字符串拼接)
        ````

      - 小测试
        ```javascript
        let a = 10 + null + true + [] + undefined + '帅子' + null + [] + 10 + false
        10 + null -> 10 + 0 -> 10
        10 + true -> 10 + 1 -> 11
        11 + [] -> 11 + '' -> '11' //
        '11' + undefinde -> '11undefined'
         '11undefined' + '帅子' + null + '' + fasle => '11undefined帅子nullfalse'
         结果 '11undefined帅子nullfalse'

        // [] /=> 空数组运算先变为数字，要先经历变为空字符串，遇到字符串啥也别想，直接变为字符串拼接 '';
        // NaN //=>运算都会变成NaN  除非碰到字符串会 碰到字符串会变为 'NaN'
        ```


  + 布尔boolean:true(真)/false(假)
    >把其他值转为布尔类型 
    >只有 0、 NaN、''/""、undefined、null 这五个值转为false 其余都转为true（而且没有任何的特殊情况）
    >Boolean([val])
    >!(取反) / !!(取反再取反，只是想转换为布尔类型)
    >条件判断


  + 空对象指针null / 未定义undefined (都代表的是没有)
    > null: 意料之中(一般都是开始不知道值，我们手动先设置null，后期再赋值)
    > undefined: 意料之外(不是我们能决定的)

#### 引用数据类型
  + 对象数据类型object
    + {} 普通对象
      - {[key],[value]}任何一个对象都是由零·到多组键值对组成的(并且属性名不能重复)

        ```javascript
        let person = {
        
            name: 'shuaizi',
        
            age: 20,
        
            height: '175cm',
        
            weight: '65kg'
        
        };
        
        //属性名如果不是 数字 默认是字符串
        ```

      - 获取属性名对应的属性值
        ```javascript
        // console.log(person.name) => 对象.属性名
        
        // console.log(person['age']) => 对象.[属性名] 属性名是数字或字符串格式的
        
        //console.log(person.sss) => 如果属性不存在 undefind
        
        console.log(person.1) => 会报 SyntaxError: 语法 / 如果属性名是数字 则不能使用点的方式获取属性值 需要用 [] 的方式
        ```

      - 设置属性名属性值
        ```javascript
        person.GF = '圆圆'
        
        console.log(person.GF)
        
        //设置的属性名不能重复，如果属性名已经存在，不属于新增属于修改
        ```

        删除属性

        ```javascript
        //真删除: 把属性彻底干掉
        
        delete.person.weight
        
        //假删除: 属性还在， 值为空
        
        person.weight = null
        ```

    + [] 数组对象
      - 数组是特殊的对象数据类型
        ```javascript
        let ary = [12, '哈哈' ,true ,13];
        
        //中括号中设置的是属性值，它的属性名是默认生成的数字，从0 开始递增，这个数字代表没一项位置 ， 我们把其称为 索引 
        
        // 天生默认一个属性名 length 存储数组的长度(个数) =》 ary.length / ary['length'] //长度从 1 开始计算 获取索引需要从 0 开始计算
        
        //第一项索引0 最后一项索引 ary.length-1
        ```

    + /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/ 正则对象

    + Math 数学函数对象

    + 日期对象

    + 类数组对象

    + ...
  + 函数数据类型function

##数据类型的区别

+ 浏览器想执行js代码：
  > 1.从电脑内存里面分配一块内存，用来执行代码（栈内存 => Stack）
  > 2.分配一个主线程用来自上而下执行代码

+ 栈内存
  | 变量存储空间| 值存储空间 |
  | :-------- | --------:|
  | 主线程     |          |

+ lat a = 12
  > 1.创建变量a 放到变量存储区域中
  > 2.创建一个值 把它存储到值存储空间中
  > 3.( = ) 为赋值 其实赋值是让变量和1值相互关联的过程
  > 4.一个变量只能指向一个值 

+ 复杂值 数据引用类型
  >1.在内存中分配新内存用来存储引用类型值 => 内存有一个 16 进制地址 （堆内存）
  >2.把对象中的键值对 依次存放到 堆内存中
  >3.把堆内存地址和变量关联起来
  >4.新数组 => 创建新空间 

#### 基本类型和 数据引用类型的区别
>基本类型： 按值操作(直接操作的是值)，所以也叫做值类型
>引用类型: 操作的是堆内存的地址(按引用地址操作)

## 数据类型检测
- typeof[val]: 检测数据类型的运算符
  ```javascript
  console.log(typeof 1) 
  //基于typeof检测出来的结果
  //1.首先是一个字符串
  //2.字符串中包含对应的类型
  
  //局限性
  //1.typeof null => 'object' 但是null并不是对象
  //2.基于typeof无法细分出当前值是普通的对象还是数组对象，因为只要是对象数据类型 返回的结果都是'object'
  //3.console.log(typeof typeof typeof [])  /因为typeof检测的结果都是字符串 所以两个及以上同时检测 最后结果必然是 "string" (注意细节)
  ```

- instancefo: 检测当前实例是否 属于某个类

  ```javascript
  var oStringObject = new String("hello world"); 
  console.log(oStringObject instanceof String);  
  //instanceof 方法要求开发者明确地确认对象为某特定类型
  ```

- constructor： 基于构造函数检测数据类型(也是基于类的方法)

  ```javascript
  var oStringObject = new String("hello world"); 
  console.log(oStringObject.constructor === String) 
  ```

- Object.prototype.toString.call(): 检测数据类型最好的方法

  ```javascript
  Object.prototype.toString.call(null) //=>"[object Null]"
  ```

## 运算符
+ 一元
  - +num
+ 二元
  - a + b
+ 三元 / 判断 true false
  - c ? a : b
+ 赋值
  - x = 1
+ 比较
  a == b
+ 算数
  - a - b
+ 位
  - a | b
+ 逻辑
  - a && b
+ 字符串
  - 'a' + 'b'
+ 特殊
  ```javascript
  //逗号运算符
  var a = (1, 2, 3) //=> a = 3 //=> 结果从左往右执行 取最右边的

  configurable: false / 如果是 true 才可以被 delete 掉
  ```


## i++和++i的区别 (i-- / --i)

```javascript
let i = 1
5+i++ //=> 先算5+i=6 然后再 i 再自加1 i = 2

let i = 1
5+(++i) //=> 先i累加1 再拿累加的结果去和5运算 => 5 + 2 => 7
```

##js中的操作语句

####判断
> 条件成立做什么？不成立做什么?

- if/else
  ```javascript
  if(条件){
    条件成立执行
  }else if(){
    条件成立执行
  }else{
    以上都不成立
  }

  //A && B A和B 都成立才为true
  //A || B A和B 只要有一个成立就为true
  // = : 赋值
  // == ：等于
  // === : 绝对等于 判断数据类型
  // > 、< 、 >= 、 <= 、 ！ => 大于 小于 大于等于 小于等于 取反 
  ```

- 三元运算符
  ```javascript
  条件 ? 条件成立处理事情 : 条件不成立处理的事情
  
  //1.如果处理的事情比较多 可以用括号包起来， 没一件事情用逗号分隔
  //2.如果不需要处理的事情 可以使用null / undefined 占位
  ```

- switc case
  ```javascript
  var a = 1

  swite(a){
    case  1:
     consle.log('hehe')
     break;

    case  1:
     consle.log('hehe')
     break;

    case  1:
     consle.log('hehe')
     break;

    default：
     console.log('默认值')
  }

  //一个变量在不同值的情况下的不同操作
  //break: 一定要加break 不然代码会一直往下面执行直到遇到 break 为止
  //default：默认值 以上都不成立才干的事情
  //swite比较的是 === “绝对等于”
  ```

####循环
>重复做某些事情就是循环
>循环体中的两个关键字
>//continue: 结束当前这轮循环 (continue后面的代码不再执行),继续执行下一轮代码
>//break: 强制结束整个循环 (break后面的代码也不再执行) 而且整个循环什么也不干直接结束
- for循环
  ```javascript
  for(var i = 0; i <= 10; i++) {

  }
  ```
- for in 循环
  >用来循环遍历对象中的键值对的(continue 和 breack 同样适用)
  ```javascript
  var obb = {}
  var obj = {
      name: 'shuaizi',
      age: '20',
      friends: 'wnagheng,xiaoming',
      1: '100',
      2: '260',
      3: '100'
  }

  //for(var 变量(key) in 对象)
  for(var key in obj){
    obb[key] = obj[key]
  }
  //特点: 优先循环数字属性名
  ```

- for of 循环
- while 循环
- do while 循环

## 函数 function
> 函数就是一个方法或者一个功能体,只需要把需要实现某个功能的代码放到一起进行封装，以后想操作这个功能，只需要把函数执即可 => "封装": 减少页面中多余的代码，提高到吗重复使用率 (低耦合高内聚)

#### 创建函数
```javascript
function 函数名( 形参... ) {
  //函数体 基于js完成需要实现的功能

  return 处理后的结果
}

//执行函数
函数名( 实参... ) 

//创建函数的时候我们设置了形参变量，如果执行的时候并没有传递对应的实参值，那么形参变量的默认值是：undefined
```
>函数执行的时候，函数体内部创建的变量我们无法获取和操作，如果想获取内部消息需要基于 retrun 返回值机制，把信息返回才可以

>函数体内遇到 return 后面代码不再执行

#### 匿名函数
>匿名函数之函数表达式：吧一个匿名函数本身作为值赋予给其他东西，这种函数一般不是手动触发执行，而需要靠其他程序驱动触发(例如：触发某一个事件的时候执行)
```javascript
document.body.onclick = function () {}
```
>//匿名函数之自执行:创建完一个匿名函数，紧接着就把当前函数加小括号执行
```javascript
(function(n){
  n => 100
})(100)
```
#### 函数中的arguments
```javascript
function sun() {
  let total = null
  for (let i=0;i<arguments.length;i++){
    let item = Number(arguments[i])
    total += item
  }
  return total
} 
let total = sun(10,20,30,50)
console.log(total)

//arguments:函数内置的实参集合
//1: 类数组集合，集合中存储着所有的函数执行时，传递的实参信息
//2:不论是否设置形参，arguments都存在
//3:不论是否传递形参，arguments都存在
```

#### 构造函数
>一种函数通过相同的方式构造对象，改动这个函数，所有的对象都跟着改变

>构造函数名称大写字母开头[约定俗成]
```javascript
function Student(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender
}

// 调用构造函数
let std = new Student('shuaizi', 21, 'male')
```

#### 箭头函数(ES6)
```javascript
function sun(n,m) {
  return n + m
}

//改写为箭头函数
let sun = (n,m) => {
  return n + m
}

//如果箭头函数体中只有一行 return 可以简写 return 和 大括号 一行搞定
let sun = (n, m) => n + m

//形参赋值 当形参没有传值的时候 执行默认值
let sun = (n = 0, m = 0) => n + m

//箭头函数会改变 this 的指向
//箭头函数中没有 arguments
```

## 预编译
>预编译: 第一次扫描

>1:没有val的声明都不是变量声明，不会参加预编译全部默认为 window 的全局变量
```javascript
  console.log(aa) // => 报错
  aa = 5
```

>2:在函数中 aa也是全局变量 / 运行时
```javascript
function test() {
  a = 5
}

console.log(a) // => 会报错
```
>3:脚本中， 所有的变量声明， 在脚本的预编译阶段完成，所有的变量声明与实际的书写位置无关
```javascript
console.log(aa) // => undefined
var aa = 5
console.log(aa) // => 5
```
>4:脚本中 所有的函数声明，在脚本的预编译阶段完成，所有的变量声明与实际的书写位置无关
```javascript
  console.log(aa) //=> object
  function aa() {
    console.log('shuaizi')
  }
```
>5:脚本中, 如果变量与函数同名，那么， 函数将覆盖变量
```javascript
  console.log(aa) //=> object
  var aa = 123
  function aa() {
    console.log('shuaizi')
  }
```

>6:脚本中, 左右函数能够覆盖变量， 变量无法覆盖函数
```javascript
  console.log(aa) //=> object
  
  function aa() {
    console.log('shuaizi')
  }
  var aa = 123
```
7:脚本中函数名相同, 后面的会覆盖前面的函数声明
```javascript
  aa()

  function aa() {
    console.log('shuaizi1')
  }
  function aa() {
    console.log('shuaizi2')
  }
```
## 作用域链
>外部对内部可见
```javascript
var scop = 'a'
function t() {
  console.log(scop) // nudefined
  var scop = 1
  console.log(scop) // 1
}
t()
```

>内部对外部不可见
```javascript
function t() {
  var scop = 1
}

t()
console.log(scop) // 报错
```

>都可见，内部优先
```javascript
var scop = 'a'
function t() {
  console.log(scop) // nudefined
  var scop = 1
  console.log(scop) // 1
}
t()
```


## Math数学函数中的常用方法
>数学函数:但它不是一个函数，他是一个对象,对象中存储了很多操作数字的属性方法，因此被称为数学函数

####Math.abs(获取绝对值)
>获取绝对值 (绝对值永远是正数或零)
```javascript
console.log(Math.abs(-12.5)) //=> 12.5
console.log(Math.abs(12)) //=> 12
console.log(Math.abs(0)) //=> 0

//传递的不是数字类型的值：先基于 Number() 转换为数字再处理
console.log(Math.abs('-1')) //=> 1
console.log(Math.abs('-1px')) //=> NaN
console.log(Math.abs(true)) //=> 1
console.log(Math.abs(null)) //=> 0
```

#### Math.ceil(向上取整) / Math.floor(向下取整)
```javascript
//向上取整 (一定要比之前大)
console.log(Math.ceil(12)) //=> 12
console.log(Math.ceil(12.1)) //=> 13
console.log(Math.ceil(12.9)) //=> 13
console.log(Math.ceil(-12.9)) //=> -12
console.log(Math.ceil(-12.9)) //=> -12
console.log(Math.ceil(-12.5)) //=> -12

//向下取整 (一定要比之前小)
console.log(Math.floor(12.9)) //=> 12
console.log(Math.ceil(12.9)) //=> 13
console.log(Math.ceil(-12.1)) //=> -13
console.log(Math.ceil(-12.9)) //=> -13
```

#### Math.round(四舍五入)
```javascript
//正数里面.5是进 负数里面.5是舍
console.log(Math.round(12.5)) //=> 13
console.log(Math.round(12.4)) //=> 12

console.log(Math.round(-12.5)) //=> -12
console.log(Math.round(-12.1)) //=> -12
console.log(Math.round(-12.9)) //=> -13
```

#### Math.max(获取最大值) / Math.min(获取最小值)
>获取一堆数组中的最大值 或 最小值
```javascript
console.log(Math.max(12,5,6,8,12,65)) //=>65

console.log(Math.min(12,5,6,8,12,65)) //=>5

//思考题
Math.max([12,65,25,63,98]) // => NaN
//当给Math.max()或Math.min()函数传参时，若参数中有非数值的项，则会返回NaN
```

```javascript
//可以用Math.max.apply(Math,array) / Math.min.apply(Math,array),把this值指向Math对象 获取最大值 或最小值

var i = [50,69,56,87,65,9,63,21,10]

Math.max.apply(Math,i) // => 最大值 => 87
Math.min.apply(Math,i) // => 最小值 => 87
```

####Math.sqrt() / Math.pow()
>sqrt: 给一个数开平方
>pow: 计算一个数的多少次幂
```javascript
console.log(Math.sqrt(9)) //=> 3 符合 N * N = M 这样的M才能整开平方
console.log(Math.sqrt(-9)) //=> NaN 负数开不了平方

console.log(Math.pow(2,10)) //=> 1024

```

####Math.random(获取随机数)
>获取 0-1 之间的随机小数
```javascript
console.log(Math.random())

//扩展 获取 1-10 之间的整数
Math.round(Math.random()*9+1)

Math.round(Math.random()*(m - n)  + n)
```

## 数组及数组中常用的方法
>数组是对象数据类型,它属于特殊的对象

### 实现数组增删改的方法
>这些方法都会修改原有的数组
####push(追加数据)
```javascript
push: 向数组末尾增加内容

@params(参数)
  多个任意类型

@return(返回值)
  新增后数组的长度

let ary = [10,20]
let res = ary.push(30,'AA',{
  name:'shuaizi'
})
console.log(res,ary) //=> res(返回值) / ary(数组)
```

#### unshift(在开始位置添加内容)
```javascript
unshift: 在开始位置添加内容

@params(参数)
  多个任意类型

@return(返回值)
  新增后数组的长度

let ary = [10,20]
let res = ary.unshift(30,'AA',{
  name:'shuaizi'
})
console.log(res,ary) //=> res(返回值) / ary(数组)
```

#### shift(删除第一项)
```javascript
shift: 删除第一项

@params(参数)

@return(返回值)
  删除的那一项

let ary = [10,20]
let res = ary.shift()
console.log(res,ary) //=> res(返回删除的内容) / ary(删除后的数组)
```

#### pop(删除最后一项)
```javascript
pop: 删除最后一项

@params(参数)

@return(返回值)
  删除的那一项

let ary = [10,20]
let res = ary.pop()
console.log(res,ary) //=> res(返回删除的内容) / ary(删除后的数组)

基于元素js可以让数组的长度干掉一位，默认干掉的就是最后一项
ary.length-- //=> [10]
```

#### splice(增删改)
```javascript
splice: 实现数组的增加,删除,修改

@params(参数)
  n,m    //都数字 从索引 n 开始删除m个元素 (m不写默认删除到末尾) //删除
  n,m,x  //都数字 从索引 n 开始删除m个元素 用x占用删除的部分 都数字修改
  n,0,x  //都数字 从索引 n 开始 一个都不删 把 x 放到索引n的前面 //增加
@return(返回值)
  把删除的部分用新数组存储起来 返回

let ary = [10,20,50,60,32,12,5]
let res = ary.splice(2,4)
console.log(res,ary) //=> res(返回删除的内容) / ary(删除后的数组)
```
### 数组的查询

>此组的方法, 原来的数组不会改变

#### slice()
```javascript
slice: 实现数组的查询
  
@params(参数)
  n,m    //都数字 从索引n开始 找到索引为m的元素 (不包括m) / m不写找到末尾 、数组的克隆0不写也可以
@return(返回值)
  把找到的内容以一个新数组的形式返回

let ary = [10,20,98,65]
let res = ary.slice(1,3)
console.log(res) //=> res(返回查询到的内容)

//如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。
```
### 数组拼接
>此组的方法, 原来的数组不会改变

####concat()
```javascript
concat: 实现数组拼接
  
@params(参数)
  多个任意值
@return(返回值)
  拼接后的新数组

let ary = [10,20,98,65]
let res = ary.concat(99)
console.log(res) //=> res(拼接后的新数组) => [10,20,98,65,99]
```
### 把数组转化为字符串
>原有数组不变

#### toString()
```javascript
concat: 把数组转化为字符串
  
@params(参数)
  *
@return(返回值)
  转换后的字符串,没一项用逗号分隔(原来的数组不变)

let ary = [10,20,98,65]
let res = ary.toString()
console.log(res) //=> res(数组转化后的字符串) => " 10,20,98,65 "
```

#### join()
```javascript
join: 把数组转化为字符串
  
@params(参数)
  可以指定分割符(字符串样式) (默认逗号分割)
@return(返回值)
  转换后的字符串(原来的数组不变)

let ary = [10,20,98,65]
let res = ary.join('|')
console.log(res) //=> res(数组转化后的字符串) => " 10|20|98|65 "

//拓展 eval把字符串转换为js表达式
let ary = [10,20,98,65]
let res = ary.join('+') //=> "10+20+98+65"
console.log(eval(res)) //=> 193
```

### 检测数组中是否包含某一项

#### indexOf() / lastIndexOf() /includes()
```javascript
indexOf() : 检测当前项在数组中的第一次位置出现的索引值
lastIndexOf() : 检测当前项在数组中的最后一次位置出现的索引值
  
@params(参数)
  要检索的这一项内容
@return(返回值)
  这一项出现的位置索引 (数字) , 如果没有这一项，返回的结果是 -1

let ary = [10,20,98,65,10]
let res = ary.indexOf()
let res = ary.indexOf()
console.log(res) //=> res(检测的值)

//ES6新方法  => includes()  =>检查数组是否包含这个值
@params(参数)
  要检索的这一项内容
@return(返回值)
  返回结果是 true 和 false

console.log(ary.includes(20))  => 存在 true
```

### 数组的排序或者排列
#### reverse(倒序)
```javascript
reverse: 把数组倒过来排列
  
@params(参数)
  *
@return(返回值)
  排序后的新数组 原来的数组改变

let ary = [12,15,9,28,10,22]
ary.reverse()
console.log(ary) => [22, 10, 28, 9, 15, 12]
```

#### sort()
```javascript
sort: 实现数组的排序 / 由小到大 /如果sort方法中不传递参数 无法处理10以上的数字排序
  
@params(参数)
  
@return(返回值)
  排序后的新数组 原来的数组改变

//10以下的数组
let ary = [1,8,6,5,4,9]
ary.sort()
console.log(ary)

//10以上的数组 a - b 正序 / b - a 倒序 
let ary = [12,88,61,15,40,19,88,54]
ary.sort((a,b) => a - b )
console.log(ary) =>[12, 15, 19, 40, 54, 61, 88, 88]

//数组对象方法排序:
function sortByKey(array,key){
    return array.sort(function(a,b){
      var x=a[key];
      var y=b[key];
      return ((x<y)?-1:((x>y)?1:0));
   });
}

//调用 //=> sortByKey(this.students,'age'); 
// age 的值 必须是 Number数据
```

### 遍历数组的方法
#### forEach()
```javascript
forEach: 遍历数组中的每一项内容
  
@params(参数)
  回调函数
  
@return(返回值)
  原来数组不变

let ary = [12,15,9,68,56,15,46]

ary.forEach((item,index) => {
  //数组中有多少项, 循环执行多少次
  //每一次执行函数，item是数组中当前操作的这一项, index 是当前项的索引
  console.log('索引：'+ index +'内容:' + item) 
})

```


## 字符串常用的方法
>所有用单引号、双引号、反引号包起来的都是字符串

```javascript
let str = 'shuaizi'
//每一个字符串都是由零到多个字符串组成的

str.length //=> 字符串长度
str[0] //=> 获取索引为零(第一字符个)
str[str.length-1] //=>获取最后字符串最后一个索引
str[1100] //=> undefiend 不存在这个索引
```

#### charAt() / charCodeAt()
```javascript
charAt: 根据索引获取指定位置的字符
charCodeAt: 获取指定字符的ASII码值 (Unicode编码值)

@params(参数)
  n [number] 获取字符串指定的索引
  
@return(返回值)
  返回查找到的字符 , 找不到返回的是空字符串或者对应的编码值 /不会返回undefiend

```
###substr(字符串截取) substring() slice()
```javascript
Substr: 截取字符串
subtring():  
slice()

@params(参数)
  substr(n,m) 从索引n开始截取m个字符 m不写截取到末尾 
  substring(n,m): 从索引 n 开始找到索引为 m 处 (不含m)
  slice(n,m): 从索引 n 开始找到索引为 m 处 (不含m) 但是slice支持负数作为索引，其余两个方法不可以
  
@return(返回值)
  返回截取到的字符串

let str = 'shuaizishuaizi'
console.log(str.substr(3,7)) //=> aizishu
console.log(str.substring(3,7)) //=> aizi
console.log(str.substring(3,1000)) //=> aizishuaizi => 截取超过索引值直接截取到末尾

console.log(str.slice(-7,-5)) //=> 索引 -7 , 索引 -8 => str.slice(7,9)
```
#### indexOf() / lastIndexOf() 验证字符串是否存在
```javascript
indexOf(x,y) : 获取x第一次出现位置的索引 y是控制查找起始位置索引 y不写从0开始寻找
lastIndexOf(x) : 最后一次出现位置的索引
  
@params(参数)
  x y 
@return(返回值)
  存在返回对应的索引 不存在 返回 -1

属性.indexOf() //=> ary.indexOf()
```

#### toUpperCase() /toLowerCase() /字符串字母大小写转换
```javascript
toUpperCase: 转大写
toLowerCase: 转小写

let str = 'shuaizizuishuai'
str = str.toUpperCase() //=> "SHUAIZIZUISHUAI"
str = str.toLowerCase() //=> "shuaizizuishuai"
```

#### split(分割符)
```javascript
split: 把字符串按照指定的分割符拆分成数组(和数组中的join对应)

let str = 'shuaizi|xiaozhang|shuaizi'
let ary = str.split('|') => ["shuaizi", "xiaozhang", "shuaizi"]
ss = ary.join(',') //=> "shuaizi,xiaozhang,shuaizi"

//split支持正则表达式
```

#### replace(字符串替换)
```javascript
replace: 新字符替换老字符

@params(参数)
  (老字符，新字符) 
@return(返回值)
  存在返回对应的索引 不存在 返回 -1

let str = 'shuaizi@;小张@;小蒋@;小毛@'
str = str.replace('@','-') //=> "shuaizi-;小张@;小蒋@;小毛@" //再不执行正则表达式的情况下 执行一次 replace 只能替换一次字符

str = str.replace(/@/g,'-') //=> "shuaizi-;小张-;小蒋-;小毛-"
```

## 日期函数

#### 日期对象的基本操作
```javascript
let time = new Date()

//获取的是本机时间
//获取的结果不是字符串而是对象数据类型的,属于日期对象() typeog time //=> "object"
```

#### 标准日期对象中提供了一些属性和方法 
+ getFullYear() 获取年
+ getMonth() 获取月 //=> 结果是 0 - 11 代表一月到十二月
+ getDate() 获取日
+ getDay() 获取星期 //=> 结果0-6 代表星期一到星期二
+ getHours() 获取时
+ getMinutes() 获取分
+ getSeconds() 获取秒
+ getTime 获取当前日期距离1970/1/1 00:00:00 这个日期之间的毫秒差
+ toLocaleDateString()() //获取年月日 //=> "2019/8/7"
+ toLocaleString() //获取年月日 //=> "2019/8/7 上午10:22:20"
>格式化本地时间
[https://blog.csdn.net/qq_44777678/article/details/98732225]:

####new Date()
>new Date()除了获取本机时间,还可以把一个时间格式字符串转换为标准的时间格式

```javascript
new Date("2019/8/7")
//=>Wed Aug 07 2019 00:00:00 GMT+0800 (中国标准时间)

支持的格式
yyyy/mm/dd
yyy/mm/dd hh:mm:ss
yyyy-mm-dd 这种格式在IE浏览器不支持
```
>格式化日期字符串
[https://blog.csdn.net/qq_44777678/article/details/89853567]:

##DOM操作
>DOM: document object model 文档对象模型 提供一些属性和方法供我们操作页面中的元素

#### 获取DOM元素
+ document.getElementsById() //=>通过id获取元素对象
+ [context].getElementsByTagName() 在指定的容器中 通过标签获取一组元素结合(不兼容IE6-8)
+ [context].getElementsByClassName() 在指定的容器中 通过样式获取一组元素结合(不兼容IE6-8)
+ document.getElrmentsByName() 通过标签的name属性获取一组节点属性(在IE中只有表单元素的    name 才能识别, 一遍用于表单处理)
+ document.head /document.body /document.documentElement //=> 获取 页面中的 head / body / html 三个元素
+ [context].querySelector([selector]) 在指定上下文中 通过选择器获取到指定的元素对象
+ [context].querySelectorAll([selector]) 在指定上下文中 通过选择器获取到指定的元素集合

#### js中的节点与节点之间的属性
>节点： Node (页面中所有的元素都是节点)
>节点集合： NodeList (getElementsByName /querySelectorAll) 获取的都是节点

+ 元素节点
  ```javascript
  nodeType: 1
  nodeName: 大写的标签名
  nodeValue: null
  ```
+ 文本节点
  ```javascript
  nodeType: 3
  nodeName: '#text'
  nodeValue: 文本内容
  ```
+ 注释节点
  ```javascript
  nodeType: 8
  nodeName: '#commen'
  nodeValue: 注释内容
  ```
+ 文档节点document
  ```javascript
  nodeType: 9
  nodeName: '#document'
  nodeValue: null
  ```
+ ......

>描述这些节点之间的属性
+ childNodes: 获取所有的子节点
+ chilren: 获取所有元素子节点(子节点标签集合)
+ firstChild: 获取第一个子节点
+ lastChild: 获取最后一个字节点
+ firstElementChild / lastElemetChild: 获取第一个和最后一个元素子节点(不兼容IE6-8)
+ previousElementSibing / nextElementSibing: 获取哥哥节点和弟弟元素节点(不兼容IE6-8)

#### js元素的动态增、删、改
+ createElement: 创建元素对象
+ createxNode: 创建文本对象
+ appendChild: 把元素添加到容器末尾
+ insertBefore: 把元素添加到指定容器中指定元素的前面
+ removeChild: 移除指定的元素
+ cloneNode(true/false): 克隆元素或节点 / true深克隆 false浅克隆

  - 增
  ```javascript
  //创建
  let box = document.createElement('div')

  //添加的指定元素末尾
  容器.appendChild(元素)

  //添加到页面
  document.body.appendChild(元素)

  //添加到指定元素位置前面
  容器.insertBefore([新增的元素],[指定的元素])
  ```

  - 克隆
  ```javascript
  //获取元素
  let box1 = document.querySelector('.box')

  //克隆
  let box = box1.cloneNode()
  ```

#### innerHTMl /innerTEXT / innerContent
```javascript
  //获取元素
  let box1 = document.querySelector('.box')

  //添加新元素 会替换掉原来的内容
  box1.innerHTML = '<h1>shuaizi<h1>'

  //添加文本信息
  box1.innerTEXT = 'shuaizi'

```

#### 设置自定义属性名和值
```javascript
//1
//设置
集合[i].myIndex = i

//获取
集合.myIndex

/2
//设置自定义属性的值
setAttribute(属性名,属性值)

//获取自定义属性
getAttribute(自定义属性名字)

//移除自定义属性也可以移除自带的属性
removeAttribute(属性名);
```

## BOM
>浏览器对象模型

#### window

+ 获取窗口宽度
```javascript
let w = window.innerWidth 
        || document.documentElement.clientWidth // IE8 - 7 - 6 - 5
        ||  document.body.clientWidth
```

+获取窗口高度
```javascript
let w = window.innerheigth 
        || document.documentElement.clientheigth // IE8 - 7 - 6 - 5
        ||  document.body.clientheigth
```
#### 获取url地址栏信息
```
location.hostname //=> "www.csdn.net"
location.pathname //=> "/"
location.port //=> ""
location.protocol //=> "https:"
location.href //=> "https://www.csdn.net/"

跳转到其他页面
location.assign('http://www.baidu.com')

```
## 封装获取url信息 
[https://blog.csdn.net/qq_44777678/article/details/98723245]: 

#### cookie
>存储一些数据到你的电脑文本中 解决如何获取用户信息问题
>cookie是以键值对的形式保存的，即key=value的格式。各个cookie之间一般是以“;”分隔。 
```javascript
设置cookie
document.cookie="name="+username;

JS读取cookie:
//假设cookie中存储的内容为：name=jack;password=123
//则在B页面中获取变量username的值的JS代码如下：
var username=document.cookie.split(";")[0].split("=")[1];  
```

## 事件
>js引擎内置的，预先定义的函数变量,事件可以由浏览器触发也可以通过用户触发,当事件触发时，js会按照一定的规则调用这些变量钟的函数

>[事件参考](https://www.runoob.com/jsref/dom-obj-event.html)


#### 绑定事件
```javascript
//获取节点
box = document.querySelector('.box')

//绑定事件
box.onclick = function() {
  console.log('绑定事件')
}
```

#### 绑定多个事件 
```javascript
//获取节点
box = document.querySelector('.box')

//绑定多个事件
box.addEventListener('click',function(){
  console.log('点击事件')
})

box.addEventListener('mouserver',function(){
  console.log('鼠标监听事件')
},false)
```
>兼容代码
[https://blog.csdn.net/qq_44777678/article/details/98772845]:


#### 事件解绑

```javascript
//方法一 解绑全部事件
对象.on事件 = null
//方法二  需要在绑定事件使用命名函数
对象.removeElementListener(事件类型,函数,false);不支持ie8
//方法三 需要在绑定事件使用命名函数
对象.datechEvent(事件类型,函数名); 支持ie8
```

#### 事件冒泡
>同一事件，子元素的事件触发后再触发父元素 / 自低向上
>事件捕获： 同一事件,先触发父元素，再触发子元素 / IE 没有事件捕获
>触发顺序：捕获阶段, 事件执行阶段, 冒泡阶段

```javascript
事件三阶段
捕获阶段 ：从外向内 ture
目标阶段 ：最开始选择的那个
冒泡阶段 ：从里向外 false
```

#### 阻止事件冒泡
```javascript
event ? window.event.cancelBubble = true : e.stopPropagation()

//阻止默认事件
默认事件: 表单提交, a标签的跳转, 右键菜单
on事件: return false

box.onclick = function (e){
  // e.preventDefault();
  // e.returnValue = false /=> 兼容IE
  // return false
}
```

## js三大系列 offset / client / scroll

#### offset
```javascript
对象.offsetWidth：获取元素自身的宽（包含边框）
对象.offsetHeight：获取元素自身的高（包含边框）

对象.offsetLeft：如果对象没有脱硫文档流，则是指距离页面左边的距离；如果脱离文档流，即：position：absolute，则是指距离上层控件左边的距离

对象.offsetTop：如果对象没有脱硫文档流，则是指距离页面上边的距离；如果脱离文档流，即：position：absolute，则是指距离上层控件上边的距离
```
>注意:offset / client / scroll 系列返回的值都是数值，不带“px”单位，可直接进行计算

#### client(可视区域)
```javascript
//可视区域横纵坐标值
var intX = window.event.clientX; //x轴
var intY = window.event.clientY; //y轴

对象.clientWidth:可视区域的宽(不包含边框),边框内部的宽度
对象.clientHeight:可视区域的高(不包含边框),边框内部的高度
对象.clientLeft:左边边框的宽度
对象.clientTop :上面的边框的高度
```
#### scroll(卷曲)
```javascript
// onscroll 卷曲事件

对象.scrollWidth：获取对象中内容的实际宽度（不包括边框），如果内容没有超出对象的宽度，则获取到的是对象的宽（不包括边框）

对象.scrollHeight：获取对象中内容的实际高度（不包括边框），如果内容没有超出对象的宽度，则获取到的是对象的高（不包括边框）

对象.scrollTop：向上卷曲出去的距离，即滚动条向下移动后，移出对象上边框的内容距离

对象.scrollLeft：向左卷曲出去的距离，即滚动条向右移动后，移出对象左边框的内容距离

//一般获取页面文档的滚动
var gaotop = document.documentElement.scrollTop;
```

## 定时器
```javascript
setInterval(方法, 事件) //=>循环多次
clearInterval(方法) //=>清除多次定时器

setTimeout(方法, 事件) //=>循环一次
clearTimeout(方法) //=>清除一次性定时器
```