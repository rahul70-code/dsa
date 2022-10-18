// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
 var sortedListToBST = function(head) {
	const arr = []
    // take values of nodes -> in array for divide and conquer -> create BST
    /**
     * 1. Put all the values in Array.
     * 2. Recursively calculate mid                 |
     * 3. create left tree node with left value     |  Same as divide & conquer (Merge Sort)
     * 4. create right tree node with right value   |
     */
	while(head){
		arr.push(head.val)
		head = head.next
	}

	function bst(arr,left,right){
		if(left > right) return null
		const mid = Math.floor((left+right)/2)
		const tree = new TreeNode(arr[mid])
		tree.left = bst(arr,left,mid-1)
		tree.right = bst(arr,mid+1,right)
		return tree
	}

	return bst(arr,0,arr.length-1)
};

/// Divide and conquer
// difference between divide and conquer and DP?