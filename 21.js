/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let p1 = l1;
    let p2 = l2;
    let res = new ListNode();
    let head = res;
    while(p1 && p2) {
        if (p1.val > p2.val) {
            res.next = p2;
            res = res.next
            p2 = p2.next;
        } else {
            res.next = p1;
            res = res.next
            p1 = p1.next;
        }
    }
    if (p1 && !p2) {
        res.next = p1;
    }
    else if (p2 && !p1) {
        res.next = p2;
    }
    return head.next;
};
// @lc code=end

