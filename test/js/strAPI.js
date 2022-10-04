function reverseString(target){
   let arr = target.split('')
   arr.reverse()
   console.log("arr",arr);
   let s= arr.join('')
   return s;
}
function palindrome(target){
   return reverseString(target)===target
}
function truncate(target,size){
    return target.slice(0,10)+'...'
}