/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head) {
        return head
    }
    let p1 = head;
    let p2 = head;
    while(p1.next != null) {
        if (n == 0) {
            p2 = p2.next
        }else  {
            n--;
        }
        p1 = p1.next;
    }
    if (n > 0) {
        return head.next
    }
    let temp = p2.next
    p2.next = temp.next;
    temp.next = null;
    return head
};
// @lc code=end

