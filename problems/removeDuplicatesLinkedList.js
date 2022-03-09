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
    while(current != null) {
        var curVal = current.val;
        // if current value exist in set -> skip that node.
        if(hs.has(curVal)) prev.next = current.next;
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
linkedlist.push(4)
linkedlist.push(2)
linkedlist.push(1)
/**
 * LC82. Remove Duplicates from Sorted List II
 * 
 */

 linkedlist.removeDuplicatesii = function (head) {
    
}

console.log(linkedlist.removeDuplicatesii())
