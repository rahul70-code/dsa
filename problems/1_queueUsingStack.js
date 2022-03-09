// ============= using linkedlist ================

class Queue {
    constructor() {
        this.pushStack = new Stack();
        this.popStack = new Stack();
        this.size = 0;
    }

    enqueue(val) {
        this.pushStack.push(val);
        this.size = this.pushStack.length + this.popStack.length;
        
    }

    dequeue() {
        if (this.popStack.length > 0) {
            this.size = this.pushStack.length + this.popStack.length - 1;
            return this.popStack.pop();
        }

        while(this.pushStack.length > 0) {
            this.popStack.push(this.pushStack.pop())
        }

        this.size = this.pushStack.length + this.popStack.length - 1;
        return this.popStack.pop();
    }
}

class Node {
    constructor(val){
        this.val = val;
        this.next = null; 
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val)
        if (this.length === 0){
            this.first = newNode;
            this.last = newNode;
            
        }else{
           let temp = this.first;
           this.first = newNode;
           this.first.next= temp;
        }
        this.length++;     
        return this.length;
    }

    pop(){
        if (this.length === 0) return null;

        let temp = this.first;

        if (this.length === 1){
            this.last = null;
        }        
        this.first = this.first.next;        
        this.length--;
        return temp;
    }
}

let queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.dequeue());
console.log(queue.dequeue());

// ============ using arrays ==============
var stack1 = [];
var stack2 = [];

function enqueue(el) {
    stack1.push(el)
}

function dequeue() {
    if(stack2.length === 0) {
        if(stack1.length == 0)  { return "Cannot dequeue because queue is empty" }
        while(stack1.length > 0) {
            var p = stack1.pop();
            stack2.push(p)
        }
    }
    return stack2.pop();
}

enqueue("a")
enqueue("b")
enqueue("c")
console.log(stack1)
console.log(dequeue())
console.log(dequeue())
console.log(dequeue())
