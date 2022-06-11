class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  };

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  };

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  };

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  printGraph() {
    const adjacencyList = this.adjacencyList;
    for (let k in adjacencyList) {
      let concat = "";
      for (let j of adjacencyList[k]) concat += j + " ";
      console.log(k + " -> " + concat)
    }
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      // console.log("vis",visited)
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      });
    })(start)
    return result;
  }

  bfs(startingNode) {

    // create a visited object
    var visited = {};

    // Create an object for queue
    var q = [];

    // add the starting node to the queue
    visited[startingNode] = true;
    q.push(startingNode);
    console.log(q)
    // loop until queue is element
    while (q.length > 0) {
      // get the element from the queue
      var getQueueElement = q[0];

      // passing the current vertex to callback function
      console.log(getQueueElement);

      // get the adjacent list for current vertex
      var get_List = this.adjacencyList[getQueueElement];
      console.log(get_List)
      // loop through the list and add the element to the
      // queue if it is not processed yet
      // for (var i in get_List) {
      //   var neigh = get_List[i];

      //   if (!visited[neigh]) {
      //     visited[neigh] = true;
          q.pop();
      //   }
      // }
    }
  }
}

var g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")


let dfs = g.depthFirstRecursive("A");
console.log(dfs)
let bfs = g.bfs("A")
// let print = g.printGraph()
console.log(bfs)

