function Stack() {
    this.count = 0;
    this.storage = {};

    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function () {
        if (this.count === 0) return undefined;
        this.count--;
        let result = this.storage[this.count]
        delete this.storage[this.count];
        return result;
    }

    this.peek = function () {
        return this.storage[this.count - 1]
    }

    this.firstElement = function () {
        return this.storage[0]
    }

    this.size = function () {
        return this.count;
    }

    this.print = function () {
        console.log(this.storage)
    }

    this.min = function () {
        return Math.min.apply(Math, collection)
        // can do
        // Math.min(...collection)
    }

    this.max = function () {
        return Math.max.apply(Math, collection)
        // Math.max(...collection)
    }
}

let stack = new Stack();
stack.push(3);
stack.push(6);
stack.push(4);
stack.push(8);
let count = stack.size();
stack.print()
console.log(count);
// stack.pop();
console.log("peek", stack.peek())
console.log("first", stack.firstElement())



