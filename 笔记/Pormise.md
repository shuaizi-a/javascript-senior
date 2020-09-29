##  Promise实例
```javascript
new Promise((resolve, reject) => {
    resolve("成功状态")
    reject("拒绝状态")
}).then(
    value => {
        // 成功的业务处理
    }，
    reason => {
        // 失败的业务处理
    }
)
```

## Promise任务执行顺序2
```javascript
setTimeout(() => {
    console.log('4')
}, 0)

new Promise((resolve, reject) => [
    resolve()
    console.log("1")
]).then(value => console.log("3"))
console.log("2")

//执行结果 1 => 2 => 3 => 4
```

## Promise封装AJAX请求(then的使用)
```javascript
function ajax(url, post) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(post, url);
    xhr.send();
    xhr.onload = function() {
      if (this.status == 200) {
        // 成功
        resolve(JSON.parse(this.response));
      } else {
        // 失败
        reject(this);
      }
    };
  });
}

// 调用实例
ajax('api网址','请求方式(post, get)').then(value =>{
    //  value数据
    return ajax('api网址','请求方式(post, get)')
}, error => {
    // error失败
}).then(value => {
    // Promise解决回调地狱 接受上一个Promise的数据
})
```

## Promise错误检测与catch()的使用
```javascript
new Promise((resolve, reject) => [
    reject()
]).then(value => console.log("超过"))
  .catch(error => console.log("统一处理错误"))
```

## finally() 
```javascript
new Promise((resolve, reject) => [
    reject()
]).then(value => console.log("超过"))
  .catch(error => console.log("统一处理错误"))
  .finally(() => console.log("无论成功还是失败都会执行"))
```

## 拓展接口
#### 缓存
```javascript
return Promise.resolve(cache.get(name));
```
#### 失败
```javascript
new Promise(resolve => {
  resolve("后盾人");
})
.then(v => {
  if (v != "houdunren.com") return Promise.reject(new Error("fail"));
})
.catch(error => {
  console.log(error);
});
```
#### 批量处理接口状态(都成功才可以返回数据)
```javascript
function ajax(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function() {
      if (this.status == 200) {
        resolve(JSON.parse(this.response));
      } else {
        reject(this);
      }
    };
  });
}

const api = "http://localhost:8888/php";
const promises = ["向军", "后盾人"].map(name => {
  return ajax(`${api}/user.php?name=${name}`);
});

Promise.all(promises)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### allSettled()
> allSettled 用于处理多个promise ，只关注执行完成，不关注是否全部执行成功，allSettled 状态只会是fulfilled。

#### race()
> 使用Promise.race() 处理容错异步，和race单词一样哪个Promise快用哪个，哪个先返回用哪个。以最快返回的promise为准, 如果最快返加的状态为rejected 那整个promise为rejected执行cache, 如果参数不是promise，内部将自动转为promise

## Promise队列
```javascript

```

## async/await
## async
>下面在 hd 函数前加上async，函数将返回promise，我们就可以像使用标准Promise一样使用了。
```javascript
async function hd() {
  return "houdunren.com";
}
console.log(hd());
hd().then(value => {
  console.log(value);
});
```

>如果有多个await 需要排队执行完成，我们可以很方便的处理多个异步队列
```javascript
async function hd(message) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(message);
    }, 2000);
  });
}
async function run() {
  let h1 = await hd("后盾人");
  console.log(h1);
  let h2 = await hd("houdunren.com");
  console.log(h2);
}
run();
```