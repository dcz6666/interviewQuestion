// 1、newInstance
function newInstance(Fn, ...args) {
    //1.创建一个新对象
    let obj = {}
    //2修改函数内部this 指向新对象并执行
    const result = Fn.call(obj, ...args)
    console.log("result", result);
    // 3 修改新对象的原型对象
    obj.__prop__ = Fn.prototype;
    return result instanceof Object ? result : obj
}


// 2、检查类型
function myInstanceof(obj, Fn) {
    //获取函数的显示原型
    let prototype = Fn.prototype;
    // 获取obj 的隐式原型对象
    let proto = obj.__proto__;
    // 遍历原型链
    while (proto) {
        // 检测原型对象是否相等
        if (prototype == proto) {
            return true;
        }
        // 如果不等于
        proto = proto.__proto__
    }
    return false
}

//3、合并对象测试
function mergeObject(...objs) {
    //声明一个空对象
    let result = {};
    //遍历所有参数对象
    objs.forEach(obj => {
        //获取当前对象所有的属性
        Object.keys(obj).forEach(key=>{
            //检测result 中是否存在key 属性
            if(result.hasOwnProperty(key)){
                result[key]=[].concat(result[key],obj[key])
            }else{
                //如果没有 则直接写入
                result[key] = obj[key]
            }
        })
    })
    return result;
}

//4、浅拷贝 方法一
function shallowClone1(target){
    if(typeof target =='object' && target !=null ){
        console.log("target",target)
        if(Array.isArray(target)){
            return[...target]
        }else{
            return {...target}
        }
    }else{
        return target;
    }
}

// 5、浅拷贝 方法二
function shallowClone2(target){
    // 判断
    if(typeof target ==='object' && target!=null){
       //创建一个容器
        let result = Array.isArray(target)?[]:{};
       // 遍历 target 数据
        for(let key in target){
            // 判断当前对象身上是否包含该属性
            if(target.hasOwnProperty(key)){
                //将属性设置 result 结果数据中
                result[key] = target[key]
            }
        }
        return result;
    }else{
        return target
    }
}

//深拷贝 方法一
function deepClone1(target){
    //通过数据创建JSON格式的字符串
    let result = JSON.stringify(target)
    //将JSON字符串闯将为JS数据
    let data = JSON.parse(result);
    return data;
}

 // 7、深拷贝 方法二
 function deepClone2(target){
     //检测数据类型
     if(typeof target ==='object' && target !=null){
        //创建一个容器 
        let result = Array.isArray(target)?[]:{};
        // 遍历对象
        for(let key in target){
            //检测该属性是否为对象本身的属性
            if(target.hasOwnProperty(key)){
                //拷贝
                 result[key] = deepClone2(target[key])
             }
         }
         return result
     }else{
         return target
     }
 }