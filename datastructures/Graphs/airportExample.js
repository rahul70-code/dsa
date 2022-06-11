/**
 * A graph can be represented as an adjacency matrix or adjacency list. 
 * In most cases, it is more efficient to use the latter because it requires 
 * less memory and offers better time-complexity when 
 * performing search algorithms.

Imagine we have a dataset that contains airports and routes. We can represent
 the graph as a Map where each key (node) is an airport and the value (edges) 
 is an array airports that it can connect to.
 */

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

//console.log(airports)

const adjacencyList = new Map();

const addNode = (airport) => {
    adjacencyList.set(airport,[]);
}

const addEdge = (source, destination) => {
    adjacencyList.get(source).push(destination);
    adjacencyList.get(destination).push(source);
}

airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

const bfs = (start) => {
    const visited = new Set();
    const queue = [start];
    while(queue.length > 0) {
        const airport = queue.shift();
        const destinations = adjacencyList.get(airport);
        for(let destination of destinations) {
            if(destination === "BKK"){
                console.log("BFS found Bangkok!!")
            }
            if(!visited.has(destination)){
                visited.add(destination)
                queue.push(destination)
            }
        }
    }
    return;
}

const dfs = (start,visited = new Set()) => {
    visited.add(start);
    const destinations = adjacencyList.get(start);
    for(let destination of destinations) {
        if(destination === 'BKK'){
            console.log("DFS found Bangkok")
            return;
        }
        if(!visited.has(destination)){
            dfs(destination,visited)
        }
    }
}

console.log(bfs('PHX'))
console.log(dfs('PHX'))



