# DOM节点
> Document Object Model 文档对象模型

## DOM节点分类
```javascript
// 元素节点(element node)
// 文本节点(text node)
// 属性节点(attribute node)

<p title='属性节点'>文本节点</p>
```

## 获取元素节点的方式
```javascript
// 获取元素节点
document.getElementById('id') //通过id获取元素节点 单个对象
document.getElementsByTagName('元素名') //通过元素名获取节点 返元素集合
document.getElementsByClassName('类名') //通过属性获取节点 返回元素集合
```

## setAttribute() / getAttribute()
```javascript
// 获取属性值
节点.getAttribute('title')

// 设置属性值
节点.setAttribute('属性名', '属性值')
```

## 节点对象属性
```javascript
1: nodeName:节点的名称
2: nodeValue:节点的值
3: nodeType:节点的属性
```

## 节点对象的常用属性
```javascript
获取全部子节点

```

## 节点对象的增删改查
```javascript
// 动态的创建节点
document.createElement('类名')

// 插入节点
父节点.appendChild('被插入的节点') // 插入父节点最后
父节点.inserBefore('新节点', '参考节点') // 插入参考节点的前面

// 删除节点
父节点.removeChild('被删除的节点')

// 替换节点
父节点.replaceChild('新节点', '被替换的节点')

// 创建文本节点
document.createTextNode('我是文本')

// 设置节点信息
父节点.innerHtml = '元素节点和文本'
父节点.innerText = '文本'
```

## js样式设置
```javascript
// 通过单独设置样式
节点.style.fontSize = "24px"

// 通过设置属性改变样式
节点.setAttribute('属性名', '属性值')
```