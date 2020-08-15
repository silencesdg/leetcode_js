/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }
  let start = "a".charCodeAt();
  let bits = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  for (let j = 0; j < s.length; j++) {
    bits[s[j].charCodeAt() - start] += 1;
    bits[t[j].charCodeAt() - start] -= 1;
  }
  for (let m = 0; m < bits.length; m++) {
    if (bits[m] != 0) {
      return false;
    }
  }
  return true;
};

// @lc code=end
