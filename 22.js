/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n <= 0) {
        return ''
    }
    let arr = []
    let handler = (leftcnt,rightcnt,s) => {
        if (leftcnt >= n && rightcnt < n) {
            arr.push(s += ')'.repeat(n-rightcnt))
            return
        }
        if (rightcnt > n || leftcnt < rightcnt) {
            return
        }
        handler(leftcnt +1,rightcnt,s+'(') 
        handler(leftcnt,rightcnt+1,s+')') 
    }
    
    handler(1,0,'(')
    return arr
};
// @lc code=end

