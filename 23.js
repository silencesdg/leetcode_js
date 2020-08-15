/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists || lists.length == 0) {
        return new ListNode().next
    }
    if (lists.length == 1) {
        return lists[0]
    }
    let mergeTwo = (l1,l2) => {
        let p1 = l1;
        let p2 = l2;
        let res = new ListNode();
        let head = res;
        while(p1 && p2) {

            if (p1.val > p2.val) {
                res.next = p2
                res = res.next
                p2 = p2.next
            } else {
                res.next = p1
                res = res.next
                p1 = p1.next
            }
        }
        if (p1 && !p2) {
            res.next = p1
        }
        else if(p2 && !p1) {
            res.next = p2
        }
        return head.next
    };
    let arr = []
    for (let i = 0; i < lists.length; i+=2) {
        if (lists[i+1]) {
            arr.push(mergeTwo(lists[i],lists[i+1]))
        } else {
            arr.push(lists[i])
        }
    }

    return mergeKLists(arr)
};
// @lc code=end

