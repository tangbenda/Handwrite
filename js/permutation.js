/*
 @author: tang
 @title: 递归求解数组全排列
 @date: 2019/7/14
 */
function permutation(arr) {
    if (arr.length === 1) {
        return arr;
    }
    if (arr.length === 2) {
        return [[arr[0],arr[1]], [arr[1], arr[0]]];
    } else {
        let temp = [];
        for (let i = 0; i < arr.length; i++) {
            let left = arr[i];
            arr.splice(i, 1);
            let resList = permutation(arr);
            arr.splice(i, 0, left);
            for (let j = 0; j < resList.length; j++) {
                resList[j].push(arr[i])
                temp.push(resList[j]);
            }
        }
        return temp
    }
}
console.log(permutation([1, 2, 3, 4]))