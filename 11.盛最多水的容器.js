/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */
// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (!height || height.length < 2) {
        return 0
    }
    let width = height.length-1
    let max = width*Math.min(height[0],height[height.length-1]);
    while (width >= 1) {
        for (let i = 0;i < height.length - width;i++) {
            let cal =width*Math.min(height[i],height[i+width]);
            max = Math.max(max,cal)
        }
        width--;
    }
    return max
};
// @lc code=end

