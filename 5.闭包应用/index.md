## 案例1
```javascript
// 假设有5个按钮
let btnList = document.querySelectorAll('button')

// 实现不了想要的效果，为什么？
for(var i = 0; i<btnList.length; i++>){
    btnList[i].onclick = function(){
        console.log(`我是第${i}个按钮`)
    }
}

```