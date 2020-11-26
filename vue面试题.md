## 如何理解mvvm
>MVC: Model(模型) View(视图) Controller(控制器：'Controller是Model与View之间的桥梁层');

>MVVM: Model(模型) View(视图) ViewModel(模型与视图做了一层绑定关系);

## 响应式数据的原理是什么
> vue.2x: Object.defindproperty()这个方法实现监听

> vue3: Proxy()进行数据劫持监听

## Vue是如何检测数据数组变化的
>Vue.js中重写了数组的push、pop、shift、unshift、splice、sort、reverse七种方法，重写方法在实现时除了将数组方法名对应的原始方法调用一遍并将执行结果返回外，还通过执行ob.dep.notify()将当前数组的变更通知给其订阅者，这样当使用重写后方法改变数组后，数组订阅者会将这边变化更新到页面中。

>重写完数组的上述7种方法外，我们还需要将这些重写的方法应用到数组上，因此在Observer构造函数中，可以看到在监听数据时会判断数据类型是否为数组。当为数组时，如果浏览器支持__proto__，则直接将当前数据的原型__proto__指向重写后的数组方法对象arrayMethods，如果浏览器不支持__proto__，则直接将arrayMethods上重写的方法直接定义到当前数据对象上；当数据类型为非数组时，继续递归执行数据的监听。

## 为何Vue采用异步渲染
>防止更新数据，就去更新视图，影响性能

## nextTick的实现原理
>1.vue用异步队列的方式来控制DOM更新和nextTick回调先后执行

>2.microtask因为其高优先级特性，能确保队列中的微任务在一次事件循环前被执行完毕

>3.因为兼容性问题，vue不得不做了microtask向macrotask的降级方案

## vue组件的生命周期
>beforecreate  // 实例初始化之前  | vue3 setup

>created       // 实例初始化完成  | vue3 setup

>beforemounte  // 实例挂载前      | vue3 onbeforemounte
 
>mounted       // 实例挂载后      | vue3 onmounted

>beforeupdate  // 数据更新前      | vue3 onbeforeupdate

>updated       // 数据更新后      | vue3 onupdated

>beforeDestroy // 实例销毁前      | vue3 onbeforeDestroy

>destroyed     // 实例销毁后      | vue3 ondestroyed


## Ajax请求放在那个生命周期里面
> mounted里面 不放到created里面是因为等到异步渲染开启的时候，created 就可能被中途打断，中断之后渲染又要重做一遍

## 何时需要使用beforeDestroy
>1.可能在当前页面中使用了 $on 方法，需要在组件销毁前解绑。

>2.清除自己定义的定时器

>3.解除事件的绑定 scoll mousemove …

## vue父子组件生命周期的调用顺序
+ 加载渲染过程
  - 父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
+ 子组件更新过程
  - 父beforeUpdate->子beforeUpdate->子updated->父updated
+ 父组件更新过程
  - 父beforeUpdate->父updated
+ 销毁过程
  - 父beforeDestroy->子beforeDestroy->子destroyed->父destroyed

## vue中的computed（计算属性）和watch(监听属性)的特点，以及深度监听
> computed:计算属性是根据data中已有的属性，计算得到一个新的属性，它是一个对象,计算属性是基于他们的依赖进行缓存的,computed是对data中的一些数据进行操作，避免在标签中进行操作，

> watch属性和computed属性类似，是为了监听data中的数据的变化，只要监听的数据一发生变化，它就能执行相应的函数，watch属性的名字必须为data中对应数据的名字,深度监听是为了监听对象中的数据变化

## watch中deep:true的原理

## Vue事件绑定原理
>Vue中通过v-on或其语法糖@指令来给元素绑定事件并且提供了事件修饰符，当虚拟DOM生成真实DOM节点或者组件时候使用addEventListener方法进行事件绑定。

## Vue中的v-html会导致那些问题
> 1.可能会导致xss攻击

> 2.V-html更新的是元素的 innerHTML 。内容按普通 HTML 插入， 不会作为 Vue 模板进行编译

> 3.在单文件组件里，scoped 的样式不会应用在 v-html 内部，因为那部分 HTML 没有被 Vue 的模板编译器处理。

> 4.后台返回的html片段，以及css样式和js，但是返回的js是不执行的，因为浏览器在渲染的时候并没有将js渲染，这时要在$nextTick中动态创建script标签并插入

## Vue中v-if和v-show的区别
> v-if: 根据条件判断是否渲染(v-if只有条件为真的时候才会创建组件或者元素，而一旦为假，就会销毁该元素或者组件)

> v-show: 根基条件切换css的display (如果一个组件或者元素需要频繁的切换，就用v-show，如果在运行的时候很少改变的话，就用v-if。)

## 有什么v-for和v-if不能连用
> 因为v-for的优先级比v-if高，这意味着 v-if 将分别重复运行于每个 v-for 循环中

## v-model的实现原理以及如何自定义v-model
>v-model只不过是一个语法糖而已,真正的实现靠的还是v-bind绑定响应式数据

>v-bind只能实现单向绑定 v-model（v-bind+触发的input事件）实现双向绑定

## vue中组件的data为什么是一个函数
>让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份data，就会造成一个变了全都会变的结果。

## 什么是作用域插槽
>默认插槽：一个组件中只能有一个默认插槽。
>相对应的，具名插槽就可以有很多个，只要名字（name属性）不同就可以了
>作用域插槽：组件带有一个可从子组件获取数据的可复用的插槽。

## 用vnodel描述DOM结构
>先将dom转换成ast语法树再生成vnode

## Vue组件如何通信
+ 父子组件通信
  -  props和$emit
+ 非父子组件通信
  - 非父子组件通信同样也可以用Vue.$emit自定义事件来解决
+ vue跨组件跨模块通信
  - vuex
+ 爷孙组件
  - provide/ inject：简单来说就是父组件中通过provide来提供变量, 然后再子组件中通过inject来注入变量。
+ eventBus
  - 事件总线，在vue中可以使用它来作为沟通桥梁的概念, 就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件， 所以组件都可以通知其他组件。
+ 本地存储
  - localStorage / sessionStorage

## diff算法的时间复杂度
>diff比较只会在同层级进行, 不会跨层级比较。所以diff是：广度优先算法。时间复杂度：O(n)

## 简述vue中的diff算法原理

## v-for中为什么要用key值
>key属性可以用来提升v-for渲染的效率！这个key属性必须是唯一的标识，给key赋值的内容不能是可变的， key属性可以避免数据混乱的情况出现 

## 描述组件渲染和更新过程
>渲染组件时，会通过Vue.extend方法构建子组件的构造函数，并进行实例化，最后手动调用$mount()进行挂载

>更新组件时，会进行patchVnode流程，其核心是diff 算法

## Vue模板编译原理
>1.第一步是将 模板字符串 转换成 element ASTs（解析器）

>2.第二步是对 AST 进行静态节点标记，主要用来做虚拟DOM的渲染优化（优化器）

>3.第三步是 使用 element ASTs 生成 render 函数代码字符串（代码生成器）

## Vue 应用运行时性能优化建议
>1. 引入生产环境的 Vue 文件

>2. 使用单文件组件预编译模板

>3. 提取组件的 CSS 到单独到文件

>4. 利用Object.freeze()提升性能

## vue相同逻辑如何抽离
>就是使用Vue.mixin方法（混入）给组件每个生命周期，函数等都混入一些公共逻辑

## 为什么要使用异步组件
>1.异步组件可以减少打包的结果。会将异步组件分开打包，会采用异步的方式加载组件，可以有效的解决一个组件过大的问题。不使用异步组件，如果组件功能比较多打包出来的结果就会变大。

>2.异步组件的核心可以给组件定义变成一个函数，函数里面可以用import语法，实现文件的分割加载，import语法是webpack提供的，采用的就是jsonp。

## keep-alive的理解
>keep-alive是Vue提供的一个抽象组件，用来对组件进行缓存，从而节省性能，由于是一个抽象组件，所以在v页面渲染完毕后不会被渲染成一个DOM元素

## Vue-Router路由守卫有哪些
>全局守卫: router.beforeEach((to,from,next)=>{})

>组件内的守卫: beforeRouteEnter:(to,from,next)=>{}

>路由独享的守卫: beforeEnter:(to,from,next)=>{}，用法与全局守卫一致。只是，将其写进其中一个路由对象中，只在这个路由下起作用。

## actions与mutation的区别
+ actions
  - 1、用于通过提交mutation改变数据
  - 2、会默认将自身封装为一个Promise
  - 3、可以包含任意的异步操作

+ mutations
  - 通过提交commit改变数据
  - 只是一个单纯的函数
  - 不要使用异步操作，异步操作会导致变量不能追踪


## 简述Vuex的工作原理

## Vue3.0有哪些变化
> 1.Vue3.0采用TypeScript来编写；
> 2.支持CompositonAPI
> 3.Vue3.0中响应式数据原理改成proxy（提升性能）；
> 4.vdom的对比算法更新，只更新vdom的绑定动态数据的部分；等。

