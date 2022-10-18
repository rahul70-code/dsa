/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

 function reverse(llist) {
    let head = llist; // set a reference to head of linked list
    if (head === null) return;

    let currentNode = head;
    let prevNode = null;
    let nextNode = null;
  
    // traverse list and adjust links
    while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
        nextNode = null;
    }
    head = prevNode; // reset head
    return head;
}
var isPalindrome = function(head) {
      let slow = head, fast = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if (fast != null) slow = slow.next;
    // reverse slow pointer
    slow = reverse(slow);
    fast = head;
    while (slow != null) {
        // compare both pointer's vals
        if (fast.val != slow.val) {
            return false;
        }
        fast = fast.next;
        slow = slow.next;
    }
    return true;
};