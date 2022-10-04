export function axios({ method, url, params, data }) {
    method= method.toUpperCase()
    return new Promise((resolve, reject) => {
      // 四步骤
      // 1、创建对对象
      let xhr = new XMLHttpRequest();
      //  2、初始化
      let str = "";
      for (let key in params) {
        str += `${key}=${params[key]}&`;
      }
      str = str.slice(0, -1);
      xhr.open(method, url+'?'+str);
      //3.发送
      if(method==='POST' || method==='PUT'){
        // content-type mime类型设置
        xhr.setRequestHeader('Content-type','application/json')
        //设置请求体
        xhr.send(JSON.stringify(data))
      }else{
        xhr.send();
      }
      // 4 处理结果  
      // 绑定状态改变的监听
      xhr.onreadystatechange = function () {
        // 如果请求没有完成, 直接结束
        if (xhr.readyState!==4) {
          return
        }
        // 如果响应状态码在[200, 300)之间代表成功, 否则失败
        const {status, statusText} = xhr
        // 2.1. 如果请求成功了, 调用resolve()
        if (status>=200 && status<=299) {
          // 准备结果数据对象response
          const response = {
            data: JSON.parse(xhr.response),
            status,
            statusText
          }
          resolve(response)
        } else { // 2.2. 如果请求失败了, 调用reject()
          reject(new Error('request error status is ' + status))
        }
      }
    });
  }
