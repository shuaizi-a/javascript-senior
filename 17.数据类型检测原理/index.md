## 数据类型检测
+ typeof
    - 返回结果是一个字符串，字符串包含了对应的数据类型：number/string/boolean/undefined/symbol/bigint/object/function
    - 小bug
        - typeof的原理：按照计算机底层存储的二进制结果来进行检测，对象都是以000...开始的
        - typeof null //"object" null的二进制存储值是000开头的
        - 所有对象都是以000开始的，所以基于typeof检测结果都是"object",也就是typeof无法细分是普通对象还是数组对象

+ instanceof （一般检测是否属于这个类）
    - 并不是检测数据类型的，是用来检测当前实例是否属于这个类，只是被打肿脸充胖子
    - 一般指应用于普通对象/数组对象/正则对象/日期对象的具体细分
    - 无法应用于原始值类型数据检测
    ```javascript
    let arr = [];
    let a = 123
    a instanceof Number // false 无法应用于原始值类型数据检测
    arr instanceof Array // true
    arr instanceof Object // true 绝对不能证明arr instanceof Array 是true就是普通对象
    ```
    - 基于 '实例' instanceof 类 来检测的时候，浏览器底层处理机制是这样的 "类[Symbol.hasInsrance](实例)"
    - Symbol.hasInsrance方法执行的原理
        - 根据当前实例的原型链上__proto__是否存在这个类的实例
+ constructor
    - 一样是打肿脸充胖子，原本就是获取实例的构造函数的
    - 一旦原型改了constructor，结果也就不准了
    ```javascript
    let arr = [];
    arr.constructor == Array // true
    arr.constructor == Object // false
    
    ```

+ Object.prototype.toString.call([value]) 或者 ({}).toString.call([value])
    - 专门用来检测数据类型的（很强大很暴力的一种方法，缺点就是代码太长了）
    - 除了Object.prototype.toString()不是转换字符串的，其余都是，Object.prototype.toString()是用来检测数据类型的
    - 返回结果 "[object 对象[Symbol.toString] || 对象，构造函数(不受自己更改影响，对内置有效) || Object]"

    ```javascript
    let classtype = {};

    ```

    ## 重写instanceof
    ```javascript
    /*
     * obj 要检测的类(不支持原始数据类型)
     * constructor 要检测的数据类型(必须是一个函数)
     */

    function instanceof_of(obj, constructor) {
        if(obj == null || !/^(object|function)$/i.test(typeof obj)) return false;
        if(typeof constructor != "function") throw new TypeError('Right-hand side of instanceof is not callable')
        
        // obj.__prpto__ === Object.getPrototypeOf(obj)
        let proto = Object.getPrototypeOf(obj),
            prototype = constructor.prototype;

        while(true){
            // 找到Object.prototype.__proto__都没有相等的，则证明不少是类的实例
            if(proto === null) return false;

            // 找到对象的原型链包含类的原型，则证明对象是类的一个实例
            if(proto === prototype) return true;

            // 一直往上级查找
            proto = Object.getPrototypeOf(obj);
        }
    }
    ```
    