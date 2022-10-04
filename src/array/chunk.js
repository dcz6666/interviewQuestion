//数组分块

export function chunk(arr, size=1) {
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
}