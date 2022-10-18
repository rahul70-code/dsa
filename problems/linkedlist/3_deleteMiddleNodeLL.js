    
// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
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


 var deleteMiddle = function(head) {
    if (head == null || head.next == null) return null;
    let slow = head, fast = head;
    // follow the slow pointer
    let follow = null
    while(fast && fast.next) {
        follow = slow
        fast = fast.next.next;
        slow = slow.next;
    }
    // follow will be slow's prev pointer
    // to delete: follow's next will be slow's next
    follow.next = slow.next;
    return head;
};