// hard - https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

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
var mergeKLists = function(lists) {
     if(lists.length == 0){
        return null;
    }
    while(lists.length > 1){
        lists.push(mergeTwoLists(lists[0], lists[1]));
        lists.shift();
        lists.shift();
    }
    return lists[0];
};