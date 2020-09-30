## 安装mongodb

[官网下载](https://www.mongodb.com/try/download/community)

## 启动mongodb

``` javascript
// 启动mongodb
// mongod.exe --dbpath F:\mongodb\data / (data数据存放的位置)

// 与mongodb建立连接
新cmd窗口输入 mongo 命令
```

## mongodb基本命令

``` javascript
//查看当前数据库列表
shou dbs
//查看当前操作的数据库
db
//切换到指定的数据库，如果没有会新建数据库
use 数据库名称
//显示当前数据库的所有集合(表)
show collections

//切换到表
use 表名称
//查询表的数据 （在数据库下面查就可以）
db.表名.find()
// 查询指定数据
db.表名.find({
    "age": "13"
})
//删除当前数据库
db.dropDatabase();
//删除集合，删除指定的集合  删除表 
db.表名.drop()
```

## 查看全部数据库

``` javascript
shou dbs
```

## 切换到指定的数据库，如果没有会新建数据库

``` javascript
use 数据库名
```

## 查看当前操作的数据库

``` javascript
db
```

## 显示当前数据库的所有集合(表)

``` javascript
show collections
```

## 删除当前数据库

``` javascript
db.dropDatabase();
```

## 切换到表

``` javascript
use 表名称
```

## 删除集合，删除指定的集合  删除表 

``` javascript
db.表名.drop()
```

## 创建表 / 增加数据

``` javascript
//创建表 / 新增数据
db.表名.insert({
    "name": "xiaoming"
});

// 添加多条数据
db.表名.insert([{
    "id": "1",
    "name": "小红"
}, {
    "id": "2",
    "name": "小明"
}, {
    "id": "3",
    "name": "小刚"
}, {
    "id": "4",
    "name": "小亮"
}]);
```

## 查

* 查询全部

``` javascript
db.表名.find() // 查询全部数据
db.表名.find().count() // 返回数据条数
```

* 指定查询

``` javascript
db.表名.find({
    "name": "shuaizi"
})

// 大于
db.表名.find({
    age: {
        $gt: 22
    }
})
// 小于
db.表名.find({
    age: {
        $lt: 22
    }
})
// 大于大于
db.表名.find({
    age: {
        $gte: 22
    }
})
// 小于等于
db.表名.find {
    age: {
        $lte: 22
    }
}

// 并且
db.表名.find(({
    age: {
        $gte: 18,
        $lte: 30
    }
}))

// 包含
db.表名.find(({
    age: /包含/
}))

// 包含以什么开头
db.表名.find(({
    age: /^包含/
}))

// 包含以什么结尾
db.表名.find(({
    age: /包含$/
}))
```

* 指定列查询

``` javascript
// 指定列查询
/* 
{}        条件
{name:1}  显示什么
 */
db.表名.find(({}, {
    age: 1, // 显示age
    name: 1 // 显示name
}))
```

* 分页查询

``` javascript
// 查询5条以前的数据
db.表名.find().limit(5)

// 查询10条以后的数据
db.表名.find().skip(10)

// 查询多少条以前和多少条以后的数据
db.表名.find().limit(10).skip(5)

// 分页思路
limit((page - 1) * 数量)
skip(数量)
```

* 排序

``` javascript
// 升序
db.user.find().sort({
    age: 1
})

// 降序
db.user.find().sort({
    age: -1
})
```

* or 或

``` javascript
db.表名.find({
    $or: [{
        age: 12
    }, {
        age: 20
    }]
})
```

* 只查询第一条数据

``` javascript
db.表名.findOne()
```

## 修改数据

* 修改单条数据

``` javascript
// 参数一条件 
// 参数二新数据
db.表名.updata({
    name: '帅子'
}, {
    $set: {
        name: '帅子'
    }
})
```

* 批量修改

``` javascript
db.表名.updata({
    name: '帅子'
}, {
    $set: {
        name: '帅子'
    }
}, {
    multi: true
})
```

## 删除数据

* 删除符合逻辑的数据

``` javascript
// {} 删除全部数据
db.表名.remove({
    age: 21
})
```

* 删除单条数据

``` javascript
db.表名.remove({
    age: 21
}, {
    justOne: true
})
```

## 索引

* 创建索引

``` javascript
db.表名.ensurelndex({
    "列名": 1
})
// 1 正序 -1降序
```

* 获取集合索引

``` javascript
db.表名.getIndexes({})
```

* 删除索引

``` javascript
db.表名.dropIndex({
    "列名": 1
})
```

## 复合索引

``` javascript
db.表名.ensurelndex({
    "列名1": 1,
    "列名2": 1
})
```

## 唯一索引

``` javascript
db.表名.ensurelndex({
    "列名1": 1
}, {
    'unique': true
})
```

## mongodb聚合管道 / 连表查询|数据统计

* $project / 查询想显示的列 (筛选)

``` javascript
db.表名.aggregate([{
    $project: {
        "列名1": 1,
        "列名2": 1
    }
}])
```

* $match / 条件(过滤)

``` javascript
db.表名.aggregate([{
    $project: {
        "列名1": 1,
        "列名2": 1
    },
    $match: {
        age: {
            $get: 30
        }
    }
}])
```

* $group / 分组

``` javascript
db.表名.aggregate([{
    $group: {
        _id: "列名",
        total: {
            $sum: "$列名"
        }
    },
}])
```

* $sort 排序

``` javascript
db.表名.aggregate([{
    $project: {
        "列名1": 1,
        "列名2": 1
    },
    $match: {
        '列名': {
            $get: 30
        }
    },
    $sort: {
        '列名': 1
    }
}])
// 1 正 -1倒
```

* $limit 限制返回的数据

``` javascript
db.表名.aggregate([{
    $project: {
        "列名1": 1,
        "列名2": 1
    },
    $match: {
        '列名': {
            $get: 30
        }
    },
    $sort: {
        '列名': 1
    },
    $limit: 10
}])
```

* $skip 跳过多少条数据

``` javascript
db.表名.aggregate([{
    $project: {
        "列名1": 1,
        "列名2": 1
    },
    $match: {
        '列名': {
            $get: 30
        }
    },
    $sort: {
        '列名': 1
    },
    $skip: 10
}])
```

* lookup 表关联查询

``` javascript
db.表名.aggregate([{
    // 表关联
    $lookup {
        from: '被关联的表',
        localField: '主表要挂关联的字段',
        foreignField: '被关联表的字段',
        as: '关联后存放的字段'
    },
    {
        // 条件
    }
}])
```
