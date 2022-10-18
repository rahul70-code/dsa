const Queue = require('../../datastructures/queues/queue_linkedlist')


class Stack {
    constructor() {
        this.enque = new Queue();
        this.deque = new Queue();
        this.size = 0;
    }
    // FILO
    // enque - [1,2,3,4,5]
    // deque - while - length of enque - deque enque - deque from dequeue queue
    push(val) {
        this.deque.enqueue(val)
        this.size = this.deque.length + this.enque.length;

    }


    pop() {
        if (this.enque.length > 0) {
            this.size = this.pushStack.length + this.popStack.length - 1;
            return this.enque.dequeue();
        }

        while(this.deque.length > 0) {
            this.enque.push(this.deque.pop())
        }

        this.size = this.pushStack.length + this.popStack.length - 1;
        return this.popStack.pop();
    }
}





/**************************** */
var eq = [];
var dq = [];

function push(el) {
    return eq.push(el)
}

function pop() {
 
}


push("1")
push("2")
push("3")
push("4")

console.log(eq)
