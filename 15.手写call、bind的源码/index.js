// bind的原理：执行bind只是先把fn/obj/10/...存储起来，返回一个匿名函数来执行，当需要使用的时候调用匿名函数执行，执行中吧事先存储起来的那些信息拿过来处理

Function.prototype.bind = function (context, ...params) {
  // this => Function 真正要执行的函数
  // obj => context 要给函数改变的this
  // params =>1,2,3 要给函数传递的参数


  return (...args) => {
    // arge => [ev] 点击行为触发，例如：事件对象
    // this => 上级上下文
    this.apply(context, params.concat(args))
  };
}

// call的原理
// 没关系，让你有关系
Function.prototype.call = function (context, ...params) {
  // this => Function 真正要执行的函数
  // obj => context 要给函数改变的this
  // params =>1,2,3 要给函数传递的参数

  // 细节点：对于context类型的处理（基本类型值无法设置键值对）
  context === null ? context = window : null;

  // 判断是否是基本数据类型 不是就把基本数据类型转换为引用类型
  !/^('function|object')$/i.test(typeof context) ? context = Object(context) : null;

  let result;
  // 细节点注意变量名冲突
  let key = Symbol('key');

  // 相当于把 obj.fn = fn;
  context[key] = this;
  // 相对于 result = obj.fn(10, 20, 30)
  result = context[key](...params);
  // 相对于清除 obj.fn这个方法
  delete context[key]
  
  return result;
}
