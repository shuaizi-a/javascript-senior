## 进程/线程
+ 进程代表的是一个程序（浏览器开一个页面就是一个进程）

+ 线程是用来处理进程中的具体事务的，如果一个程序中需要同时做好多事，就需要开辟好多线程

+ 浏览器是多线程的
    - GUI渲染
    - HTTP网络
    - JS渲染

+ js是单线程的：浏览器只分配一个线程用来渲染js代码
    - js代码大部分是‘同步编程’，上面的任务没有完成，后面的任务无法完成
    - 但是js利用浏览器的多线程机制，可以规划出‘异步编程效果’
    - 异步编程
        - 定时器
        - ajax/Fetch/跨域
        - 事件绑定
        - Promise(本身是同步的，用来管理异步编程)
        - async / await

+ 案例
```javascript
setTimeout(()=>{
    console.log(1)
},20)

console.log(2)

setTimeout(()=>{
    console.log(3)
},10)

console.log(4)
console.time("AAA")
for(let i=0; i<900000000; i++>){

}
console.timeEnd("AAA") // =>AAA 约79ms
console.log(5)
setTimeout(()=>{
    console.log(6)
},8)
console.log(7)
setTimeout(()=>{
    console.log(8)
},15)
console.log(9)

// 2 4 AAA 5 7 9 3 1 6 8
```

## 任务执行机制：
+ 同步任务
+ 微(promise.then()) / 没有微任务就执行宏任务
+ 宏(定时器) / 执行顺序，谁先到时间的先执行谁

## 回调函数
> 把一个函数作为值，传递给另一个函数，在另外一个函数执行的时候，再把传递进来的函数执行
```javascript
Array.prototype.forEach = function(callback){
    for(let i=0; i<this,length; i++){
        let item = this[i],
            index = i
            callback && callback.call(item,item,index)
    }
}

let arr = [1,2,3,4,5]
arr.forEach(function(item, index){
    // 执行 
})
```