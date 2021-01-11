/*
 @author: tang
 @title: 给定一个字符串 s，找到 s 中最长的回文子串 https://leetcode-cn.com/problems/longest-palindromic-substring/solution/dong-tai-gui-hua-shi-xian-by-serine_lion/
 @date: 2020/12/12
 */

const longestPalindrome = function (s) {
  let len = s.length
  let res = ''
  //创建二维数组
  let dp = Array.from(new Array(len), () => (new Array(len).fill(0)))
  //从字符串首部开始
  for (let i = 0; i < len; i++) {
    //从字符串i前开始依次向前查找
    for (let j = i; j >= 0; j--) {
      // s[i] == s[j]：说明当前中心可以继续扩张，进而有可能扩大回文串的长度
      // dp[j+1][i-1]：true, 说明s[j,i]的子串s[j+1][i-1]也是回文串
      // 特殊情况i - j < 2, 意即子串是一个长度为0或1的回文串
      dp[j][i] = s[i] === s[j] && (i - j < 2 || dp[j + 1][i - 1])
      if (dp[j][i] && i - j + 1 > res.length) {
        res = s.substring(j, i + 1)
      }
    }
  }
  console.log(res)
  return res
};

longestPalindrome('ababada')
