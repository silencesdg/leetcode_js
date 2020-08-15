/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = ''
    for (let index = 0; strs[0] && index < strs[0].length; index++) {
        const s = strs[0][index];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][index] != s) {
                return res
            }
        }
        res += s
        
    }
    return res
};
// @lc code=end

