/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */
// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) {
        return s;
    }
    let list = []
    let j = 0;
    let m = numRows-1;
    let add = true;
    for(let i = 0;i < s.length;i++) {
        list[j] = (list[j] || '') + s[i]
        if (i == m) {
            add = !add
            m+=(numRows-1)
        }
        if (add) {
            j ++
        } else {
            j--
        }
    }
    return list.join('')
};
// @lc code=end

