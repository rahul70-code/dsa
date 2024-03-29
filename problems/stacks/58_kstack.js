class Kstack {
    constructor(k, n) {
        this.k = k;
        this.n = n;
        this.arr = new Array(n).fill(0);
        // to store top element of stack sn
        this.top = new Array(k).fill(-1);
        // to store next element of arr
        this.next = [];
        // to store empty space index
        this.free = 0;
        for (let i = 0; i < n - 1; i++)
            this.next[i] = i + 1;
        // add last element of next -> -1
        this.next[n - 1] = -1;
    }

    isEmpty(sn) {
        return this.top[sn] == -1;
    }

    isFull() {
        return this.free == -1;
    }

    push(item, sn) {
        if (this.isFull()) {
            console.log("Stack overflow");
            return;
        }

        let insertAt = this.free;
        //    console.log("insertat ",insertAt)
        this.free = this.next[this.free];
        //    console.log("free ",this.free)
        this.arr[insertAt] = item;
        this.next[insertAt] = this.top[sn];
        this.top[sn] = insertAt;
    };
    // pop from stack number - sn
    pop(sn) {
        if (this.isEmpty()) return undefined;
        let top_of_stack = this.top[sn];
        this.top[sn] = this.next[this.top[sn]];
        this.next[top_of_stack] = this.free;
        this.free = top_of_stack;
        return this.arr[top_of_stack];
    }
    // sn -> stack number
    print(sn) {
        let top_index = this.top[sn];
        while (top_index != -1) {
            console.log(`stack ${sn}: `, this.arr[top_index])
            top_index = this.next[top_index]
        }
    }

}
// k = no of stacks, n = no of elements in array
let kStacks = new Kstack(2, 10);

kStacks.push(11, 0);
kStacks.push(12, 0); kStacks.push(13, 0);

kStacks.push(98, 1);
kStacks.push(99, 1);
kStacks.push(100, 1);

// kStacks.print(2)
kStacks.print(1)

let removed = kStacks.pop(1);

console.log("Removed element", removed);
// kStacks.print(2)

kStacks.print(0)
// kStacks.print(1)
