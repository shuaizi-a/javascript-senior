## session

``` javascript
npm install express - session

var express = require('express');
var session = require('express-session');

//使用就靠这个中间件
app.use(session({
    name: 'itying', // 设置session名称
    secret: 'wilson', // 服务生成session签名
    resave: false, // 强制保存session 
    saveUninitialized: true, // 强制将未初始化的session存储
    cookie: {
        maxAge: 1000 * 60, // 过期时间
        secure: false // true 表示只有https协议才能访问cookie
    },
    rokking: true // 在快过期访问强制设置cookie
}))

//登录后设置cookie
app.get('/', function(req, res) {
    req.session.useranme // 获取session 
})

//获取cookie
app.get('/log', function(req, res) {
    req.session.username = '帅子' // 设置session
})
```

## 销毁session

``` javascript
// 方法一
req.session.cookie.maxAge = 0

// 方法二
req.session.username = ''

// 方法三
req.session.destroy
```

## 负载均衡把session保存到mongodb

``` javascript
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(session({
    secret: 'foo',
    store: new MongoStore({
        url: 'mongodb://127.0.0.1:27017/shop',
        touchAfter: 24 * 3600 // 不管发出多少请求 24小时只更新一次
    })
}));
```
