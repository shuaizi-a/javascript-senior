# this指向
## this默认指向
>1:this默认指向window
>2:全局韩景霞this指向window
>3:函数独立调用,函数内部的this也指向window
>4:嵌套函数内的this也指向window
>5:立即执行函数内的this指向window
>6:闭包 this默认指向window


>默认绑定 => 独立调用
>隐式调用 => 方法调用
>显示绑定 => 间接调用 call() apply() bind()
>new 绑定 => 构造函数调用

## 隐式丢失
>函数别名
>函数当作参数传递
>内置函数
>间接调用