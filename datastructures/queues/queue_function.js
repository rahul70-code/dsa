function Queue() {
    var collection = [];

    this.print = function() {
        console.log(collection);
    }

    this.enqueue = function(element) {
        collection.push(element);
    }

    this.dequeue = function() {
        collection.shift();
    }

    this.front = function() {
        return collection[0];
    };

    this.isEmpty = function() {
        return collection.length === 0;
    }

    this.size = function() {
        return collection.length;
    }

    this.min = function() {
        return Math.min.apply(Math,collection)
        // Math.min(...collection)
    }

    this.max = function() {
        return Math.max.apply(Math,collection)
        // Math.max(...collection)
    }
}

let queue = new Queue();

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.print()
let empty = queue.isEmpty()
console.log("is empty: ",empty);
queue.print()
console.log("Min element: ", queue.min())
console.log("Max element: ", queue.max())
