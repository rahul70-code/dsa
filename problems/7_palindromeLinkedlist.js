const LinkedList = require('../datastructures/Singly linked list/singlylinkedlist')
let linkedlist = new LinkedList();
linkedlist.areIdenticalRecur = (a, b) => {
    // If both lists are empty
    if (a == null && b == null)
        return true;

    // If both lists are not empty, then data of
    // current nodes must match, and same should
    // be recursively true for rest of the nodes.
    if (a != null && b != null)
        return (a.data == b.data) &&
            linkedlist.areIdenticalRecur(a.next, b.next);

    // If we reach here, then one of the lists
    // is empty and other is not
    return false;
}
linkedlist.push(1)
linkedlist.push(2) // s
linkedlist.push(2)
linkedlist.push(1)
// null  // f

/**
 * 1. slow and fast pointer
 * 2. reverse the first half (slow pointer)
 * 3. compare values of two pointers
 */
linkedlist.isPalindrome = (head) => {
    let slow = head, fast = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    linkedlist.transverse(fast.head)
    if (fast != null) slow = slow.next;
    slow = linkedlist.reverse(slow);
    fast = head;
    linkedlist.transverse(fast.head)
    while (slow != null) {
        if (fast.val != slow.val) {
            return false;
        }
        fast = fast.next;
        slow = slow.next;
    }
    return true;
}

console.log(linkedlist.isPalindrome(linkedlist.head))

