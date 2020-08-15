/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (61.76%)
 * Likes:    665
 * Dislikes: 0
 * Total Accepted:    89.3K
 * Total Submissions: 143.3K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * 
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 
 * 
 * 示例：
 * 
 * 给你这个链表：1->2->3->4->5
 * 
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 * 
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 * 
 * 
 * 
 * 说明：
 * 
 * 
 * 你的算法只能使用常数的额外空间。
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 * 
 * 
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {

    if (!head) {
        return new ListNode().next
    }

    let reverse = (startNode) => {
        let node = startNode;
        let endNode = null;
        let c = 0;
        while (node) {
            if (c == k) {
                break;
            }
            c++;
            endNode = node;
            node = node.next;
        }
        if (c < k) {
            return [startNode,endNode];
        }
        node = startNode
        let prev = endNode.next
        while (node) {
            if (c == 0) {
                break
            }
            let temp = node.next;
            node.next = prev;
            prev = node;
            node = temp;
            c--;
        }
        return [endNode,startNode]
    }

    let [prevStart,prevEnd] = reverse(head);
    if (!prevEnd.next) {
        return prevStart
    }
    let res = prevStart;
    let node = prevEnd.next;
    
    while (node) {
        let [currStart,currEnd] = reverse(node);
        prevEnd.next = currStart
        prevEnd = currEnd
        node = currEnd.next
    }
    return res
};

// @lc code=end

