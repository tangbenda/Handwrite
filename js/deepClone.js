/*
 @author: tang
 @title:
 @date: 2019/7/2
 */

function isObject(source) {
    return typeof source === 'object' && source !== null;
}
// 引入WeakMap,存储已拷贝过的对象，当检测到当前对象已存在于哈希表中时，取出该值并返回
// 解决循环引用造成的内存溢出问题
function deepClone(source, hash = new WeakMap()) {
    if (!isObject(source)) {
        return source;
    }
    if (hash.has(source)) {
        return hash.get(source);
    }
    let target = Array.isArray(source) ? [] : {};
    hash.set(source, target);
    // Reflect.ownKeys()获取自身属性键组成的数组
    // 等同于 Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))
    Reflect.ownKeys(source).forEach((key) => {
        if (isObject(source[key])) {
            target[key] = deepClone(source[key], hash);
        } else {
            target[key] = source[key]
        }
    })
    // for (let key in source) {
    //     if (Object.prototype.hasOwnProperty.call(source, key)) {
    //         if (isObject(source[key])) {
    //             target[key] = deepClone(source[key], hash);
    //         } else {
    //             target[key] = source[key]
    //         }
    //     }
    // }
    return target
}

const a = {a: 1, b: 2, c: {a: 1, b: 2}};
// 循环引用
a.d = a;

let target = deepClone(a);
console.log(target)