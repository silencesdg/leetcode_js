/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length == 0) {
        return true
    }
    if (s.length%2 != 0) {
        return false
    }
    let map = {
        '{':'}',
        '[':']',
        '(':')'
    }
    let arr = [];
    let find = false;
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        let target = map[element]
        if (element && arr[arr.length - 1] == element) {
            arr.pop()
        } else if (target) {
            find = true
            arr.push(target)
        }
    }
    return (arr.length == 0 && find)
};
// @lc code=end

