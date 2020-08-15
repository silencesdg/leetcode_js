/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} romans
 * @return {number}
 */
var romanToInt = function(romans) {
    let map={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
       }
     
     let sum=0
     
        for (let i = 1;i < romans.length;i++) {
     
        let v = map[romans[i]]
        let prev = map[romans[i-1]]
        if (v > prev) {
          sum -= prev
        } else {
          sum += prev
        }
        
       }
     
        sum += map[romans[romans.length-1]]
        return sum
     
};
// @lc code=end

