# windows对象
## 弹出层
```javascript
// 警告框
alear();
// 确认框 有返回值
confirm();
// 输入框
prompt();
```

## 定时器
```javascript
// 一次性定时器
setTimeout(函数, 时间)
// 清除定时器
clearTimeout(定时器名称)

// 连续定时器
setInterval(函数, 时间)
// 清除定时器
clearInterval(定时器名称)
```

## location
```javascript
// Location 对象属性
location.hash	    设置或返回从井号 (#) 开始的 URL（锚）。
location.host	    设置或返回主机名和当前 URL 的端口号。
location.hostname	设置或返回当前 URL 的主机名。
location.href	    设置或返回完整的 URL。
location.pathname	设置或返回当前 URL 的路径部分。
location.port	    设置或返回当前 URL 的端口号。
location.protocol	设置或返回当前 URL 的协议。
location.search	    设置或返回从问号 (?) 开始的 URL（查询部分）。

// Location 对象方法
location.assign()	加载新的文档。
location.reload()	重新加载当前文档。
location.replace()	用新的文档替换当前文档。
```
## navigator
```javascript
// Navigator 对象属性
navigator.appCodeName	      返回浏览器的代码名。
navigator.appMinorVersion	  返回浏览器的次级版本。
navigator.appName	          返回浏览器的名称。
navigator.appVersion	      返回浏览器的平台和版本信息。
navigator.browserLanguage	  返回当前浏览器的语言。
navigator.cookieEnabled	    返回指明浏览器中是否启用 cookie 的布尔值。
navigator.cpuClass	        返回浏览器系统的 CPU 等级。
navigator.onLine	          返回指明系统是否处于脱机模式的布尔值。
navigator.platform	        返回运行浏览器的操作系统平台。
navigator.systemLanguage	  返回 OS 使用的默认语言。
navigator.userAgent	        返回由客户机发送服务器的 user-agent 头部的值。
navigator.userLanguage	    返回 OS 的自然语言设置。

// Navigator 对象方法
navigator.javaEnabled()	  规定浏览器是否启用 Java。
navigator.taintEnabled()	规定浏览器是否启用数据污点 (data tainting)。

// 检测当前浏览器上的插件
function hasplugins(name) {
  name = name.toLowerCase()
  for(let i =0; i<navigator.plugins.length; i++ ){
    if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
        return true;
    }
    return false
  }
}
alert(hasplugins("Flash"))
```

## history
```javascript
// History 对象属性
history.length	返回浏览器历史列表中的 URL 数量。

// History 对象方法
history.back()	    加载 history 列表中的前一个 URL。
history.forward()	加载 history 列表中的下一个 URL。
history.go()	    加载 history 列表中的某个具体页面。
```
