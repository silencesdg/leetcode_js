/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let n = nums1.length + nums2.length;
  let p1 = Math.floor(nums1.length / 2);

  let n1 = Math.floor((n + 1) / 2 - 1);
  let p2 = n1 - p1 - 1;
  let s1 = findSortAt(n1, nums1, nums2, p1, nums1[p1] > nums2[p2]);
  if (n % 2 != 0) {
    return s1;
  }
  let n2 = Math.floor((n + 2) / 2 - 1);
  p2 = n2 - p1 - 1;
  let s2 = findSortAt(n2, nums1, nums2, p1, nums1[p1] > nums2[p2]);

  return (s1 + s2) / 2;
};

function findSortAt(nth, nums1, nums2, p1, isP1Greater = true) {
  let p2 = nth - p1 - 1;

  console.log(`开始查找nth:${nth} p1:${p1}  p2:${p2}`);

  if (isP1Greater && nums1[p1] <= nums2[p2]) {
    return nums1[p1 + 1];
  } else if (!isP1Greater && nums1[p1] > nums2[p2]) {
    return nums2[p2 + 1];
  }
  if (p1 < 0) {
    return nums2[nth];
  }
  if (p2 < 0) {
    return nums1[nth];
  }

  if (nums1[p1] > nums2[p2]) {
    return findSortAt(nth, nums1, nums2, p1 - 1, true);
  } else {
    return findSortAt(nth, nums1, nums2, p1 + 1, false);
  }
}

console.log(
  "中位数是:",
  findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7], [2, 3, 4])
);
// @lc code=end
