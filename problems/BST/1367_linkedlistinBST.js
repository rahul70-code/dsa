//https://leetcode.com/problems/linked-list-in-binary-tree/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */

 const inOrder = (head, root) => {
    if(!head) return true;
    if(!root) return false;
    if(head.val != root.val ) return false;
    return inOrder(head.next, root.left) || inOrder(head.next, root.right);
}

var isSubPath = function(head, root) {
    if(inOrder(head, root)) return true;
    if(!head) return true;
    if(!root) return false;
    return isSubPath(head, root.left) || isSubPath(head, root.right);
};