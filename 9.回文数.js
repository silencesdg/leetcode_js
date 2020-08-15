/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    let length = Math.floor(Math.log10(x))
    let y = x;
    let sum = 0;
    while(length >= 0) {
        sum += y%10*Math.pow(10,length)
        length--
        y=Math.floor(y/10)
    }
    return sum == x
};
// @lc code=end

