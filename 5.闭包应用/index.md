## 案例1
```javascript
// 假设有5个按钮
let btnList = document.querySelectorAll('button')

// 实现不了想要的效果，为什么？
// 循环中的i是全局的，每一轮循环对应元素的click绑定方法（创建函数[存储代码字符串]，此刻代码还没有执行），循环结束后，全局i=5，点击某个按钮，执行之前绑定的函数，此刻形成一个全新的私有上下文，他的上下文是全局上下文，函数执行过程中，遇到变量i，但是i不是私有变量，找到的是全局变量i，全局i是5
for(var i = 0; i<btnList.length; i++>){
    btnList[i].onclick = function(){
        console.log(`我是第${i}个按钮`)
    }
}

// 方法1： 闭包机制1
// 当点击事件触发的时候，执行对应的函数，用到的i不从全局上下文找，相对于自己形成一个上下文，存储需要的i，存储指定的索引即可 => 闭包保护机制
//弊端。循环多少次就产生多少个闭包，占内存
for(var i = 0; i<btnList.length; i++){
  //没一轮循环都会把自执行函数执行，形成一个私有上下文,每一个形成的私有上下文中，创建的函数都会被外部的onclick所占用，所以形成了5个闭包
  (function(n){
    btnList[n].onclick = function(){
        console.log(`我是第${n}个按钮`)
    }
  })(i)
}

// 方法1：闭包机制2
// 还是基于闭包机制，但是不是自己去执行函数构建，而是利用ES6中的let去产生私有上下文

// for循环特有机制子改变i，父的i也会改变

// 方法2： 自定义属性
// 把每一个元素对象是都加一个自定义属性存储索引

//方法3：事件委托机制 （性能提升约40%）
document.body.onclick = function(ev){
  if(ev.target.tarName == 'BUTTON'){
    let index = taeget.getAttrbutr('index')
    console.log(`为啥第${+index + 1}个按钮`)
  }
}
```

## 单例模式和JQ部分源码分析

#### 避免变量污染
+ 单例设计模式
>单例：单独的实例，每一个实例都是独立的，里面有很多自己的私有属性和方法, 每一个对象都是object实例

> 原理：利用闭包的保护及对象的分组特性，结合在一起实现 => 最早的模块化思想;
```javascript
let AModule = (function (){
  function fn(){...}
  function query(){...}

  return {
    fn,
    query
  }
})()

// 调用
AModule.fn()
```


## jq源码分析
>环境搭建
```javascript
(function(){
  gunction Banner() {...}

  // 浏览器环境
  if(typeof window != "undefined") {
    window.Banner = Banner
  }

  // 支持CommonJS/ES6Model
  if(typeof module !== "undefined" && typeof module.exports !== "undefined"){
    module.exports = Banner;
  }
})()
```

## 惰性函数
>懒，能执行一次绝不执行第二次
```javascript
function getCss(element, attr){
  if(window.getComputedStyle){
    getCss = function(element, attr){
      return window.getComputedStyle(element)[attr]
    }
  }else{
     getCss = function(element, attr){
      return element.currentStyle[attr]
    }
  }

  // 重构后执行一次确保第一次调用getCss也可以获取到想要的结果
  return getCss(element, attr)
}
```

## 函数柯里化
```javascript
function fn(a){
  return function(b){
    console.log(a + b)
  }
}

fn(1)(2)
```

## compose组合函数
>自己百度


## 防抖节流
+ 防抖
>对于频繁触发操作，只识别一次
```javascript
/* 
 * @Params
 * func[function]: 触发的函数
 * wait：时间
 * immedate：默认多次操作，我们识别的是最后一次，但是immedate = true，让其识别第一次
 */
function debounce(func, wait = 1000, immedate = false) {
    let timer = null
    return function anonymouse(...params) {
        let now = immedate && !timer;

        // 每次点击都清除之前设置的定时器
        clearTimeout(timer)

        // 重新设置一个新的定时器 监听wait时间内是否触发第二次 
        timer = setTimeout(() => {
            // 手动让其回归到初始状态
            timer = null;

            // wait怎么久的等待，没有触发第二次
            !immedate ? func.call(this, ...params) : null
        }, wait);

        now ? func.call(this, ...params) : null
    }
}

function fn(item){
  console.log(1)
  console.log(item)
}

document.body.onclick = debounce(fn,300,true)
```

+ 节流
>在一段频繁操作中，可以触发多次，但是触发的频率由自己指定
```javascript
/* 
 * @Params
 * func[function]: 触发的函数
 * wait：时间
 */
function throttle(func, wait = 300) {
    let timer = null,
        previous = 0; // 纪录上一次操作的时间
    return function anonymouse(...params) {
        let now = new Date(),
            remaining = wait - (now - previous); // 记录还差多少时间达到触发一次的频率
        if (remaining <= 0) {
            // 两次操作时间超过awit了
            window.clearTimeout(timer)
            timer = null;
            previous = now;
            func.call(this, ...params)
        } else if (!timer) {
            // 两次操作时间还没有超过awit了
            timer = setTimeout(() => {
                timer = null;
                previous = new Date();
                func.call(this, ...params)
            }, remaining);
        }
    }
}
```