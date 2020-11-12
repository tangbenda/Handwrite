/*
 @author: tang
 @title: 组数项的最长公共前缀 leetcode-14
 @date: 2020/11/12
 思路：令最长公共前缀 ans 的值为第一个字符串，进行初始化，遍历后面的字符串，依次将其与 ans 进行比较，
      两两找出公共前缀，最终结果即为最长公共前缀，如果查找过程中出现了 ans 为空的情况，则公共前缀不存在直接返回
      时间复杂度：O(s)，s 为所有字符串的长度之和
 */
 function longestCommonPrefix (strs) {
   if (!Array.isArray(strs)) {
     console.error('参数只能是数组')
     return
   }
   if (strs.length === 0) {
     return ''
   }
   let common = strs[0]
   for (let i = 1; i < strs.length; i++) {
     // 内层循环，记录两两比较公共字符串下标
     let j = 0;
     for(; j < common.length && j < strs[i].length; j++) {
       if (common[j] !== strs[i][j]) {
         break
       }
     }
     common = common.slice(0, j)
   }
   return common
 }
 console.log(longestCommonPrefix(['ab', 'abf', 'abc']))