/*
 @author: tang
 @title: 函数柯里化
 @date: 2020/11/30
 参考：https://segmentfault.com/a/1190000018180159
     https://www.yuque.com/fe9/basic/pq4mzx#dc4cae58
 */
let add = (a, b, c) => a + b + c
function curry1 (fn, currArgs) {
  return function() {
    let args = [].slice.call(arguments);

    // 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接
    if (currArgs !== undefined) {
      args = args.concat(currArgs);
    }
    // 递归调用
    if (args.length < fn.length) {
      return curry1(fn, args);
    }
    // 递归出口
    return fn.apply(null, args);
  }
}
function curry2(fn) {
  let length = fn.length;
  let args = [];
  return function curryFn(...curryArgs) {
    args = args.concat(curryArgs);
    if (args.length > length) {
      throw new Error('arguments length error')
    }
    if (args.length === length) {
      return fn(...args);
    }
    return curryFn;
  }
}

const curryAdd = curry1(add)
const a = curryAdd(1)(2)(3) // 6
console.log(a)
