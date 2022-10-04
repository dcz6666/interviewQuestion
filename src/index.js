export function test(){
    document.write('测试自定义包');
    console.log("test()")
}
export {chunk} from './array/chunk';

export {map,reduce,filter,find,findIndex,every,some} from './array/declares'

export {axios} from './axios/index';