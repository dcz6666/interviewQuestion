// map
function map(arr, callback) {
    // 声明一个空数组
    let result = []
    //遍历数组
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i))
    }
    //返回结果
    return result
}

//reduce
function reduce(arr, callback, initValue) {
    //声名变量
    let result = initValue
    for (let i = 0; i < arr.length; i++) {
        //执行回调
        result = callback(result, arr[i])
    }
    //返回最终结果
    return result;
}

//filter
function filter(arr, callback) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        //执行回调
        let res = callback(arr[i])
        if (res) {
            result.push(arr[i])
        }
    }
    return result;
}

//find
function find(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        let res = callback(arr[i]);
        if (res) {
            return arr[i]
        }
    }
    //如果没有遇到满足条件的返回undefined
    return -1
}

//findIndex
function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        let res = callback(arr[i])
        if (res) {
            return i
        }
    }
    return -1;
}

//every
function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        // 执行回调如果回调执行返回结果为fasle
        if (!callback(arr[i], i)) {
            return false
        }
    }
    return true
}

//some
function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        // 执行回调如果回调执行返回结果为fasle
        if (callback(arr[i], i)) {
            return true
        }
    }
    return false
}

//concat 

function concat(arr, ...args) {
    //声明一个空数组
    let result = [...arr]
    //遍历数组
    args.forEach((item) => {
        //判断 item是否为数组
        if (Array.isArray(item)) {
            result.push(...item)
        } else {
            result.push(item)
        }
    })
    return result
}

//slice
function slice(arr, start, end) {
    if (arr.length == 0) {
        return [];
    }
    //判断start
    start = start || 0
    if (start >= arr.length) {
        return []
    }
    //判断end
    end = end || arr.length
    if (end < start) {
        end = arr.length
    }
    //声明一个空数组
    let result = []
    console.log("start", start);
    console.log("end", end);
    for (let i = 0; i < arr.length; i++) {
        if (i >= start && i < end) {
            result.push(arr[i])
        }
    }
    return result;
}

//数组扁平化 方法1
function flatten1(arr) {
    let result = []
    arr.forEach((item) => {
        console.log("item", item)
        if (Array.isArray(item)) {
            result = result.concat(flatten1(item));
        } else {
            result = result.concat(item)
        }
    })
    return result;
}

//数组扁平化 方法2
function flatten2(arr) {
    let result = [...arr];
    console.log("result", result);
    while (result.some((item) => { return Array.isArray(item) })) {
        result = [].concat(...result)
    }
    return result;
}

//数组分块

function chunk(arr, size) {
    if (arr.length === 0) {
        return []
    }
    let result = []
    let tmp = []
    arr.forEach(item => {
        //判断tmp 元素长度是否为0
        if (tmp.length == 0) {
            //将tmp 压入到result
            result.push(tmp)
        }
        //将元素键入临时数组tmp中
        tmp.push(item)
        //判断
        if (tmp.length == size) {
            tmp = []
        }

    })
    return result
    console.log("result:", result);
}

//difference
function difference(arr1, arr2 = []) {
    if (arr1.length == 0) {
        return []
    } else if (arr.length == 0) {
        return arr1.slice();//返回一个新数组
    }

    let result = arr1.filter(item => !arr2.includes(item))
    return result;
}

// API 删除数组元素 pull
function pull(arr, ...args) {
    // 声明空数组 保存删掉的元素
    let result = [];
    // 遍历 arr
    for (let i = 0; i < arr.length; i++) {
        //判断当前元素是否存在于args 数组中
        if (args.includes(arr[i])) {
            // 将挡圈元素的值存入到result
            result.push(arr[i])
            //删除当前的元素
            arr.splice(i, 1);
            //下标自减
            i--
        }
    }
    return result
}

function pullAll(arr, values) {
    return pull(arr, ...values)
}


//  得到数组的部分元素
function drop(arr, size) {
    return arr.filter((value, index) => { return index >= size })
}

function dropRight(arr,size){
    return arr.filter((value,index)=>{return index<arr.length-size})
}