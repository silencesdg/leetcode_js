/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const source = [
    [],
    ["a", "b", "c"],
    ["d", "e", "g"],
    ["h", "i", "j"],
    ["k", "l", "m"],
    ["n", "o", "p"],
    ["q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  let res = [];
  const handler = (index, s) => {
    if (index == digits.length) {
        res.push(s)
        return res
    }

    let l = source[digits[index]];
    
    while (l && l.length > 0) {

        handler(index+2,s)

    }

    
  };

  const length = digits.length;
  while (length > 0) {}
};
// @lc code=end
