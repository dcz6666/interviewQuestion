// map
export function map(arr, callback) {
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
export function reduce(arr, callback, initValue) {
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
export function filter(arr, callback) {
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
export function find(arr, callback) {
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
export function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        let res = callback(arr[i])
        if (res) {
            return i
        }
    }
    return -1;
}

//every
export function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        // 执行回调如果回调执行返回结果为fasle
        if (!callback(arr[i], i)) {
            return false
        }
    }
    return true
}

//some
export function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        // 执行回调如果回调执行返回结果为fasle
        if (callback(arr[i], i)) {
            return true
        }
    }
    return false
}
