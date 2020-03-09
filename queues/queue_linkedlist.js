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

    enqueue(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        };
        return ++this.size;
    };

    dequeue() {
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        } 
        this.first = this.first.next;
        this.size--;
        return temp;
    };
};

var q = new Queue();
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