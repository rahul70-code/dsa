class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
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

    detectLoop(h) {
        let s = new Set();
        while (h != null) {
            if (s.has(h)) return true;
            s.add(h)
            h = h.next;
        }
        return false;
    }

    detectLoopMap(head){
        let map = new Map();
        let list = head;
        let index = 0;
        while(list!==null) {
            if(!map.has(list)) {
                map.set(list, index++)
            } else {
                return list;
            }
            list = list.next;
        }
        return null;
    }

    floydCycleDetection(head) {
        let slow_p = head, fast_p = head;
        let flag = 0;
        while (slow_p != null && fast_p != null && fast_p.next != null) {
            slow_p = slow_p.next;
            fast_p = fast_p.next.next;
            if (slow_p == fast_p) {
                flag = 1;
                break;
            }
        }
        if (flag == 1) return true
        else return false;
    }
}


let list = new SinglyLinkedList();
// let head;
list.push(29);
list.push(65);
list.push(64);
list.push(76);
// list.head.next.next.next.next = list.head;
// head.next.next.next.next = head;
let detect = list.detectLoop(list.head)
let detectLoop = list.floydCycleDetection(list.head)

console.log(detect)
console.log(detectLoop)

