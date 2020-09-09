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

// 继承
// 继承的目的：让子类的实例同时也具备父类中私有的属性和公共的方法

// 1.原型继承(子类的原型等于父类的实例)
// 特点：1.父类中私有和公有的属性方法最后都变成子类实例公有的。2.和其他语言不同的是，原型继承并不会把父类的属性和方法拷贝给子类，而是让子类基于__proto__原型链找到自己定义的属性和方法

function Parent() {
  this.x = 100;
}

Parent.prototype.getX = function () {
  console.log(this.x)
}

function Child() {
  this.y = 200
}

Child.prototype = new Parent(); // 原型继承
Child.prototype.getY = function () {
  console.log(this.y)
}

let cl = new Child();

// 2.拷贝继承

function Parent() {
  this.x = 100;
}

Parent.prototype.getX = function () {
  console.log(this.x)
}

function Child() {
  // 在子类构造函数中，把父类当作普通方法执行（没有父类实例，父类原型上的那些东西也就和它没有关系了）,只能继承父类私有的不能继承父类公共的
  Parent.call(this) // 相当于给这个Child设置一个私有属性x,值是100，相当于让子类的实例继承了父类的私有属性，并且也变为了子类私有的属性'拷贝式'

  this.y = 200
}

Child.prototype.getY = function () {
  console.log(this.y)
}

let cl = new Child();

// 3.寄生组合式继承
// 父类私有变成子类私有，父类公有变为子类公有
function Parent() {
  this.x = 100;
}

Parent.prototype.getX = function () {
  console.log(this.x)
}

function Child() {

  Parent.call(this)

  this.y = 200
}
// Child.prototype.__proto__ = Parent.prototype
Child.prototype = Object.create(Parent.prototype)
Child.prototype.getY = function () {
  console.log(this.y)
}

let cl = new Child();

// 4.ES6继承
class Model {
  constructor(){
    this.x = 100
  }

  get(){
    return this.x
  }
}

// 继承一定要在constructor第一行上加上super()
class teg extends Model {
  constructor(){
    super(); // 相当于把Model执行并且可以传值类似于call()
    this.y = 200
  }

  getY() {
    return this.y
  }
}
