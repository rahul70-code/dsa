/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if(head==null) return head;
    // if starting elements are equal to val
      while(head!=null && head.val==val){
          head = head.next;
      }
      // curr to head, prev to null
      let curr = head;
      let prev = null;
      // loop curr till end
      while(curr!=null){
        // if curr == val -> prev's next = curr's next; curr = curr.next
        // else prev = curr, curr = curr.next;
          if(curr.val==val){
              prev.next = curr.next;
              curr = curr.next;
          }
          else{
              prev = curr;
              curr = curr.next;        
          }
      }
      return head;
};