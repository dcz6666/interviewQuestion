function call(fn,obj,...args){
    // 判断
    if(obj==null || obj==undefined){
        obj=globalThis //全局对象
    }
    //为obj添加临时的方法
    obj.temp = fn
    // 调用 temp 方法
    let result= obj.temp(...args);
    //删除temp 方法
    delete obj.temp;
    //返回执行结果
    return result;
}

function apply(fn,obj,args){
    if(obj==null || obj==undefined){
        obj=globalThis
    }
    obj.temp = fn
    let result = obj.temp(...args)
    delete obj.temp;
    return result
}

function bind(fn,obj,...args){
    return function(...args2){
        return call(fn,obj,...args,...args2)
    }
}