// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let iter = head;
    let len = 0, i = 1;
    while (iter) iter = iter.next, len++;
    if (len == n) return head.next;
    for (iter = head; i < len - n; i++) iter = iter.next;
    iter.next = iter.next.next;
    return head;
};