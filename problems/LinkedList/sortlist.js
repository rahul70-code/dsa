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

// merge two sorted list
 var mergeTwoLists_recursive = function (l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists_recursive(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists_recursive(l1, l2.next);
        return l2;
    }
};
// middle of linkedlist
function getMid(head) {
       let midPrev = null;
        while (head && head.next) {
            midPrev = (midPrev == null) ? head : midPrev.next;
            head = head.next.next;
        }
       let mid = midPrev.next;
        midPrev.next = null;
        return mid;
    }

var sortList = function(head) {
     if (!head || !head.next)
            return head;
        let mid = getMid(head);
        let left = sortList(head);
        let right = sortList(mid);
        return mergeTwoLists_recursive(left, right);
};