function PriorityQueue() {
    let collection = [];
    this.print = function () {
        console.log(collection);
    }

    this.dequeue = function () {
        return collection.shift();
    }
    this.front = function () {
        return collection[0];
    }

    this.isEmpty = function () {
        return collection.length === 0;
    }
    this.size = function () {
        return collection.length;
    }
    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element)
        } else {
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element)

            }

        }
    }
}

let queue = new PriorityQueue();
queue.enqueue(["gannicus", 3])
queue.enqueue(["spartacus", 1])
queue.enqueue(["crixus", 2])
queue.enqueue(["oenomaus", 4])
queue.print()
