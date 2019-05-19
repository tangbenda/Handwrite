/*
 @author: tang
 @title:  手写new方法
 @date: 2019/5/19
 */
function Monkey(name) {
    this.name = name;
    this.food = 'banana';
}
Monkey.prototype.eat = function () {
    console.log(`I am ${this.name}, I like eat ${this.food}`)
};

let smallMonkey = new Monkey('Tony');
console.log(smallMonkey, smallMonkey.eat());
console.log(smallMonkey instanceof Monkey);

function _new(fn, ...arg) {
    let obj = Object.create(fn.prototype);    // obj._proto_ = fn.prototype
    fn.apply(obj, arg); // 使构造函数中this指向arg
    return obj
}

let tinyMonkey = _new(Monkey, 'Ketty');
console.log(tinyMonkey, tinyMonkey.eat());
console.log(tinyMonkey instanceof Monkey);
