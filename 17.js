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
var letterCombinations = function(digits) {
    if (!digits || digits.length == 0) {
        return []
    }
    const maps = [
        [],[],
        ['a','b','c'],
        ['d','e','f'],
        ['g','h','i'],
        ['j','k','l'],
        ['m','n','o'],
        ['p','q','r','s'],
        ['t','u','v'],
        ['w','x','y','z'],
    ]
    
    let res = []

    const handler = (x,target) => {
        if (x >= digits.length) {
            res.push(target)
            return
        }
        let chars = maps[digits[x]]
        for (let i = 0; i < chars.length; i++) {
            handler(x+1,target+chars[i])
        }
    }

    handler(0,'')
    return res;

};
// @lc code=end

