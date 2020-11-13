/*
 @author: tang
 @title: 洗牌算法
 @date: 2020/11/13
 */
// 我们每一次循环从前 len - i 个元素里随机一个位置，将这个元素和第 len - i 个元素进行交换，迭代直到 i = len - 1 为止。
// https://www.h5jun.com/post/array-shuffle.html

// 利用splice
function shuffle(a) {
  let b = [];
  while (a.length) {
    let index = Math.floor(Math.random() * (a.length));
    b.push(a[index]);
    a.splice(index, 1);
  }
  return b;
}

function shuffle1(arr){
  let len = arr.length;
  for(let i = 0; i < len - 1; i++){
    let idx = Math.floor(Math.random() * (len - i));
    let temp = arr[idx];
    arr[idx] = arr[len - i - 1];
    arr[len - i -1] = temp;
  }
  return arr;
}

console.log(shuffle([1,2,3,4,5]))
console.log(shuffle1([1,2,3,4,5]))