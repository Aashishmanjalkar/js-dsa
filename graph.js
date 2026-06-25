//Undirected Adjancency list
class Graph {
    constructor() {
        this.numberOfNodes = 0
        this.adjacencyList = {}
    }

    addVertex(node) {
        if (!this.adjacencyList.hasOwnProperty(node)) { 
            this.adjacencyList[node] = []; this.numberOfNodes++;
        }
    }

    addEdge(node1, node2) {
        this.adjacencyList[node1].push(node2)
        this.adjacencyList[node2].push(node1)
    }


}


const graph = new Graph()
graph.addVertex(0)
graph.addVertex(1)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addEdge(3, 1)
graph.addEdge(3, 4)
graph.addEdge(1, 2)
console.log(graph)

//Adjanceny matrix
//Adjancency list
//Edge list