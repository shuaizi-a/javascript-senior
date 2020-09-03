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