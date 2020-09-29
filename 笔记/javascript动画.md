## 匀速动画
```javascript
/* 
obj: 节点
end： offsetLeft偏移量
 */

function starAnimation(obj, end) {
    clearInterval(timer);
    let speed = end > obj.offsetLeft ? 5 ? -5;
    let timer = setInterval(function() {
            if(obj.offsetLeft === end){
                return clearInterval(timer);
            }
            obj.style.left = obj.offsetLeft + speed + 'px';
    }, 30)
}
```

## 缓动运动
```javascript
// 缓动动画公式: 加速度 = (结束值 - 起始值) / 缓动系数 | 由快到慢

/* 
obj: 节点
end： offsetLeft偏移量
 */

function starAnimation(obj, end) {
    clearInterval(timer);
    let timer = setInterval(function() {
            let seep = (end - obj.offsetLeft) / 20
            speed = end > 0 ? Mach.ceil(speed) : Mach.floor(speed);
            if(obj.offsetLeft === end){
                return clearInterval(timer);
            }
            obj.style.left = obj.offsetLeft + speed + 'px';
    }, 30)
}
```

## 透明动画
```javascript
// 兼容IE浏览器
filter: aleha(opacity: 30)

function starAnimation(obj, endAlpha) {
    let alpha = 30;
    clearInterval(timer);
    let timer = setInterval(function() {
            let seep = endAlpha > alpha ? 5 : -5;
            if(obj.offsetLeft === end){
                return clearInterval(timer);
            }
            alpha += speed;

            obj.style.opacity = alpha / 100;
            obj.style.filter = `alpha(opacity: ${alpha})`;
    }, 30)
}
```