// https://leetcode.com/problems/swap-nodes-in-pairs/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    if(head == null) return head;
    let curr = head;
    while(curr !== null && curr.next) {
        let temp = new ListNode();
        temp.val = curr.val
        curr.val = curr.next.val
        curr.next.val = temp.val
        curr=curr.next.next
    }
    return head
};