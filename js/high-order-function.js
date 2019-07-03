/*
 @author: tang
 @title:
 @date: 2019/7/3
 */

/*  实现add函数满足以下功能
 * add(1); 	       // 1
 * add(1)(2);  	   // 3
 * add(1)(2)(3)；  // 6
 * add(1)(2, 3);   // 6
 * add(1, 2)(3);   // 6
 * add(1, 2, 3);   // 6
 * */

function add(a) {
    let sum = function (b) {
        a += b;
        return sum
    }
    // 打印函数会自动调用toString方法
    sum.toString = function () {
        return a
    }
    return sum
}
console.log(add(1)(2)(3).toString())

function _add() {
    let args = [...arguments];
    function addFn() {
        args.push(...arguments);
        return addFn
    }
    addFn.toString = function () {
        return args.reduce((a, b) => a + b);
    }
    return addFn
}
 console.log(_add(1)(2)(3, 4).toString());
