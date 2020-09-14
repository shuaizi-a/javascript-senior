// promise实例
// new Promise的时候会立即执行
/* 
* promise实例
* + [[PromiseState]] Promise实例
*   - pending 初始状态
*   - fulfilled / resolved 成功状态 (一般指的是异步请求成功)
*   - rejectd 失败状态(一般指的是异步请求失败)
* + [[PromiseResult]] Promise结果/值
*   - 初始值是undefined
*   - 不论成功还是失败，成功的结果或者失败的结果都会赋值给它
*/
let p1 = new Promise((resolve, reject) => {

})


