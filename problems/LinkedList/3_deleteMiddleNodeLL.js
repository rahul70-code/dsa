const LinkedList = require('../../datastructures/Singly linked list/singlylinkedlist');
let linkedList = new LinkedList();

linkedList.deleteMiddleOfLinkedList = function (head) {
    if (head == null || head.next == null) return null;
    let copyHead = head;
    let count = this.countNodes(head);
    let mid = Math.floor(+count / 2);
    while (mid > 1) {
        head = head.next;
        mid--;
    }
    head.next = head.next.next;
    return copyHead
}

linkedList.deleteMiddleOfLinkedList_FastSlowPointer = function (head) {

}