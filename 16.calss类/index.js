/* ES6基于class创建类 */
// 只能new执行;

class Model {
  // 构造函数
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  // 相对于model的私有属性
  z = 100;

  // 私有方法
  getx = function () { };

  // 原型(prototype)上的公有方法
  getx() { };

  // 静态属性和方法
  static n = 20;
  static setNumber();
}

// 原型上的公共属性需要提取到外面单独写
Model.prototype.x = 10;

// 调用model
let a = new Model(10, 30)