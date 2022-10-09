function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists_iterative = function (l1, l2) {
    let dummyHead = new ListNode();

    let prev = dummyHead;

    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        }
        else if (l2.val < l1.val) {
            prev.next = l2;
            l2 = l2.next;
        }

        prev = prev.next;
    }

    if (l1 != null) prev.next = l1;
    else prev.next = l2;

    return dummyHead.next;
};
// 1->6->3
// 4->5
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