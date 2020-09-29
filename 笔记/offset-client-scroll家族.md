## offset 偏移量
>offsetHeight: 元素在垂直方向上占用的空间大小，以像素计。包括元素的高度、（可见的）水平滚动条的高度、上边框高度和下边框高度。
>offsetWidth: 元素在水平方向上占用的空间大小，以像素计。包括元素的宽度、（可见的）垂直滚动条的宽度、左边框宽度和右边框宽度。
>offsetLeft: 元素的左外边框至包含元素的左内边框之间的像素距离。
>offsetTop: 元素的上外边框至包含元素的上内边框之间的像素距离。

>offsetParent的定义: 与当前元素最近的经过定位的父级元素
>1.元素自身有fiexd定位，offsetParent是null
>2.元素本身没有fiexd定位, offsetParent是body
>3.元素本身不存在fiexd定位，父级元素存在定位，offsetParent是以最近的经过定位的父级元素
>4.body元素的offsetParent是null

## 求当前元素的偏移量
```javascript
var son = document.getElementByid('son')

function getElementLeft(son) {
    // 1.获取当前左偏移量
    var actuaLeft = obj.offsetLeft;
    // 2.获取当前定位父级
    var parent = obj.offsetParent;

    // 循环
    while(parent != null){
        //3.求出当前的左方偏移量
        actuaLeft = actuaLeft + parent.clientLeft + parent.pffsetLeft;
        // 4.更新定位父级
        parent = paren.offsetParent;
    }
    // 5.返回当前偏移量
    return actuaLeft;
```

## client   可视区、客户端

>1、clientWidth和clientHeight  包括内容区和内边距，不包括边框
>2、clientTop和clientLeft 左边框和上边框的大小

## scroll 滚动
>1、scrollHeight和scrollWidth  对象内部实际内容的高度/宽度，包括内容区和内边距，不包括边框
>2、scrollTop和scrollLeft  被卷去部分的 顶部/左侧 到可视区域 顶部/左侧 的距离

## 滚动兼容代码
```javascript
let docscrollTop = document.documentElement.scrollTop || document.body.scrollTop

// 控制页面滚动方法
scroll(x, y)
```
