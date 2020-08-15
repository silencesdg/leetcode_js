/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let s = x+''
    if (s[0] == '-') {
        s= s[0] + s.slice(1,s.length).split('').reverse().join('')
    } else {
        s= s.split('').reverse().join('')
    }
    s = s*1
    let max = Math.pow(2,31)
    if (s < -1*max || s > max-1) {
        return 0
    }
    return s
};
// @lc code=end

