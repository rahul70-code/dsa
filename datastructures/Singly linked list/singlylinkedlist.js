// peice of data - val
// reference to next node
class Node {
  constructor(val) {
    this.val = val;
    this.head = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  };

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    };
    return current;
  };

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    };
    return temp;
  };

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
          this.head = newNode;   
      this.head = newNode;
    };
    this.length++;
    return this;
  };

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let count = 0;
      let count = 0; 
    let count = 0;
    while (count !== index) {
      current = current.next;
      count++;
            count++;          
      count++;
    };
    return current;
  };

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true
    };
    return false;
  };

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  };

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  };

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    };
    return this;
  }

  transverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  middleOfLinkedList() {
    let fast, slow = this.head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }

  count() {
    if (this.head == null) return 0;
    return 1 + this.count();
    // let current = this.head;
    // let count = 0; 
    // while(current) {
    //       current = current.next;
    //       count++;          
    // };
    // return count;
  };
}

let list = new SinglyLinkedList();
list.push(99);
list.push(65);
list.push(64);
list.push(76);
list.push(45);
// console.log(list.middleOfLinkedList());
console.log(list.count())

// console.log(list)
// list.insert(0,56);
// console.log(list)
// list.remove(1,65)
// console.log(list)
// console.log(list.get(1))
// list.insert(5,56);
// console.log(list)
// list.push("hello"); 
// list.push("world");
// list.push("bye");
// list.push("<3!!");
// console.log(list.get(2));
// console.log(list.get(-2));
// console.log(list.set(1,"byebye"))
// console.log(list.get(1))
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// list.unshift('rahul')
// console.log(list);
// list.unshift('talreja')
// console.log(list);
// console.log(list.shift());
// console.log(list);
// list.push('byes')
// console.log(list.push('hello'))
// console.log(list.push('bye'))
// console.log(list.head.next)
// console.log(list.head.next.next)
// console.log(list.transverse());
// console.log(list)
// console.log(list.pop())
// console.log(list)
// console.log(list.pop())
// console.log(list)
// console.log(list.pop())
// console.log(list)
