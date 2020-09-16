<!-- 设计模式是一种思想：用来有效管理代码的思想 -->

<!-- 单例模式实现发布订阅者模式 -->
```javascript
let subscribe = (function(){
        // 自定义时间池
    let pond = {};
    // 事件池结构
    // {
    //     AAA:[xxx,xxx],
    //     BBB:[xxx,xxx]
    // }

    // 添加事件
    /* 
     * type 自定义事件名
     * func 函数名
    */
    cosnt on = function(type, func) {
        // 判断当前事件池内是否有这个自定义事件 (存在不做如何操作，不存在设置空对象)
        pond.hasOwnProperty(type) ? null : pond[type] = []
        let arr = pond[type]

        // 验证当前自定义事件内的函数是否重复
        for( let i=0; i<arr.length; i++ ){
            if(arr[i] === func){
                return;
            }
        }
        arr.push(func)
    }

    // 移除事件
    /* 
     * type 自定义事件名
     * func 函数名
    */
    const off = function(type, func){
        let arr = pond[type] || []
        for(let i=0; i<arr.length; i++ ){
            if(arr[i] === func){
                arr.splice(i, 1)
                break;
            }
        }
    }


    // 执行事件
    /* 
     * type 自定义事件名
     * ...params 形参
    */
    const fire = function(type, ...params) {
        let arr = pond[type] || []
        arr = arr.slice(0); // 浅克隆解决数组塌陷问题
        for(let i=0; i<arr.length; i++ ){
            let item = arr[i]
            item(...params)
        }
    }

    return {
        on,
        off,
        fire
    }
})()
```

