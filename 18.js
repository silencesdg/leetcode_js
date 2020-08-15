/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const list = [];
    nSum(5,0,nums.sort((a,b) => a-b),target,list)
    console.log('list-----',list)
    return list
};

var nSum = function (n,fromIndex,nums,target,list,tempr=[]) {
    if (n == 2) {
        let a = fromIndex
        let b = nums.length-1
        console.log('------',tempr)
        while (a < b) {
            let sum = nums[a] + nums[b]
            if (sum < target) {
                a++
            } else if (sum > target) {
                b--
            } else {
                list.push([...tempr,nums[a],nums[b]])
                console.log('获取到一个:',fromIndex,target,tempr)
                return tempr
            }
        }
        return []
    }
    for (let j = fromIndex; j < nums.length; j++) {
        fromIndex == 0 && (tempr = []);
        tempr.push(nums[j])
        
        nSum(n-1,j+1,nums,target - nums[j],list,tempr)
    }
}

fourSum([1,0,-1,3,-3,0,-2,2],0)
// @lc code=end

