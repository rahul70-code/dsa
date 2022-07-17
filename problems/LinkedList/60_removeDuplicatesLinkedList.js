/*
 *  9/March/2022
    Remove duplicates from unsorted linked list
 */

const LinkedList = require('../datastructures/Singly linked list/singlylinkedlist')

let linkedlist = new LinkedList();

linkedlist.removeDuplicates = function (head) {
    var hs = new Set();
    var current = head;
    var prev = null;
    while (current != null) {
        var curVal = current.val;
        // if current value exist in set -> skip that node.
        if (hs.has(curVal)) prev.next = current.next;
        // else add that node in set and continue
        else {
            hs.add(curVal);
            prev = current;
        }
        current = current.next;
    }
}

// console.log(linkedlist.transverse())
// console.log(linkedlist.length)

// linkedlist.removeDuplicates(linkedlist.head)
// console.log(linkedlist.transverse())


linkedlist.push(1)
linkedlist.push(1)
linkedlist.push(1)
linkedlist.push(2)
linkedlist.push(3)

/**
 * LC82. Remove Duplicates from Sorted List II
 * 
 */
// iterative soln
// [1,2,3,3,4,4,5] -> [1,2,5]
linkedlist.removeDuplicatesii_i = function (head) {
    let curr = head;
    let dHead = linkedlist;
    while (curr) {
        let check = curr;
        while (check.next && check.next.val == curr.val) check = check.next;
        let next = check.next;
        if (curr == check) {
            dHead.next = curr;
            dHead = dHead.next;
            dHead.next = null
        }
        curr = next;
    }
    return dHead.next;
}
// recursive solution
linkedlist.removeDuplicatesii_r = function (head) {

}

linkedlist.removeDuplicatesii_i(linkedlist.head)
console.log(linkedlist.transverse())
