class Graph {
    constructor() {
        this.adjacencyList = {};
    };

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    };
};

var g = new Graph();
g.addVertex("Tokyo");
console.log(g)