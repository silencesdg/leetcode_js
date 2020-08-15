/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

const { for } = require("core-js/fn/symbol");

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let romans = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];
  let nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let res = "";

  for (let i = nums.length - 1; i >= 0; i--) {
    res += romans[i].repeat(num / nums[i]);
    num = num % nums[i];
  }
  return res;
};
// @lc code=end
