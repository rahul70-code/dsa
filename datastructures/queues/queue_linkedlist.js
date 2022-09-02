class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    };

    enqueue(data) {
        const newNode = new Node(data);
    
        if (!this.first) this.first = newNode;
        else this.last.next = newNode;
    
        this.last = newNode;
        this.size++;
    
        return this.size;
      }

    dequeue() {
        if (!this.first) return null;
    
        const removedNode = this.first;
        this.first = removedNode.next;
        this.size--;
    
        if (!this.size) this.last = null;
    
        return removedNode.data;
      }
};

// var q = new Queue();

module.exports = Queue
// q.enqueue('first')
// console.log(q)
// q.enqueue('second')
// console.log(q)
// q.enqueue('third')
// console.log(q)

// q.dequeue()
// console.log(q)
// q.dequeue()
// console.log(q)
// q.dequeue()
// console.log(q)