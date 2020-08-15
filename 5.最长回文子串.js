/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = s.length > 0 ? s[0] : "";
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i + 1;

    for (let j = 0; j < 2; j++) {
      left = i;
      right = i + j + 1;

      while (s[left] && s[right] && s[left] == s[right]) {
          left--;
          right++;
      }
      left++;
      right--;
      if (right - left + 1 > max.length) {
        max = s.substring(left, right + 1);
      }
    }
  }

  return max;
};
// @lc code=end
