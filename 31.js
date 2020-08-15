/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (34.31%)
 * Likes:    607
 * Dislikes: 0
 * Total Accepted:    81K
 * Total Submissions: 236.1K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 
 * 必须原地修改，只允许使用额外常数空间。
 * 
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let find = false
    for (let i = nums.length-2; i >= 0; i--) {
        if(nums[i] < nums[i+1]) {
            let temp = nums[i]
            nums[i] = nums[i+1]
            nums[i+1] = temp
            find = true
            break
        }
    }
    if (!find) {
        
    }
};

const reverseDescentList = (nums,start,end,insertIndex) => {
    let indexSum = start + end
    let insertNum = nums[insertIndex]
    for (let i = start; i <= end; i++) {
        if (nums[i] <= nums[indexSum - i]) {
            break
        }
        let temp = nums[i]
        nums[i] = nums[indexSum - i]
        nums[indexSum-1] = temp
    }
    
}
// @lc code=end

