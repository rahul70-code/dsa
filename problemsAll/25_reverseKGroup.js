// hard - https://leetcode.com/problems/reverse-nodes-in-k-group/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

 function reverse(node, k) {
    let prev=null;
    let curr=node;
    let next=null;
    let g=k
    while(g-- > 0) {
        next = curr.next;
        curr.next=prev
        prev=curr
        curr=next
    }
    node=prev;
    return node;
}


var reverseKGroup = function(head, k) {
    let cursor = head;
        for(let i = 0; i < k; i++){
            if(cursor == null) return head;
            cursor = cursor.next;
        }
        let curr = head;
        let prev = null;
        let nxt = null;
        for(let i = 0; i < k; i++){
            nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }
        head.next = reverseKGroup(curr, k);
        return prev;
};