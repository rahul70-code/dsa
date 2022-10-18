/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    // create two dummy lists
    let left = new ListNode(0);
    let right = new ListNode(0);

    let leftTail = left;
    let rightTail = right;
    // loop through list 
    // if val is less than x -> add it in left
    // if val is greater than x -> add it in right
    while (head != null) {
        if (head.val < x) {
            leftTail.next = head;
            leftTail = leftTail.next;
        }
        else {
            rightTail.next = head;
            rightTail = rightTail.next;
        }
        head = head.next;
    }
    // now left of next -> attach it to right of next;
    // return left.next

    leftTail.next = right.next;
    rightTail.next = null;

    return left.next;


};