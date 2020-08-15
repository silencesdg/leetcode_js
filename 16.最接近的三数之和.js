/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let sum = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let j = i+1;
        let k = nums.length-1;
        while (j < k) {
            
            let s = nums[i] + nums[j] + nums[k]
            if (Math.abs(s - target) < Math.abs(sum - target)) {
                sum = s
            } else {
                if (s - target < 0) {
                    j++
                } else if(s - target > 0) {
                    k--;
                } else {
                    return s
                }
            }

        }
    }
    return sum
};
// @lc code=end

