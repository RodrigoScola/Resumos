#algorithms #datastructures



They are the perfect data structure for modeling networks
composed of nodes or vertices which hold data and edges, which are a connection between two vertices
graphs have varying degrees of connection. the higher the ratio of edges to vertices the more connected the graph
create the graph with the following requirements:

- can store any data
- maintains a list of connections to other vertices represented by a list of edge instances
- can add and remove edges going to another vertex
- stores all of its vertices, represented by a list of vertex instances
- knows if it is directed or undirected
- knows if it is weighted or unweighted
- can add and remove its own vertices
- can add and remove edges between stored vertices

```js
class Vertex {
  constructor(data) {
    this.data = data
    this.edges = []
  }
}
class Graph {
  constructor() {
    this.vertices = []
  }
}
```

##### Adding vertices

```js
function addVertex(data) {
  let newVertex = data
  if (!(newVertex instanceof Vertex)) newVertex = new Vertex(data)
  this.vertices.push(newVertex)
  return newVertex
}
```

> removing vertices

{
removeVertex(vertex) {
this.vertices = this.vertices.filter(item => item !== vertex);
return this.vertices
}
}
connecting vertices with edges
since you can add vertices to the graph, you should be able to connect them togheter
{
class Edge {
constructor (start,end,weight = null) {
this.start = start;
this.end = end ;
this.weight = weight;
}
}
class Vertex {
addEdge (vertex) {
if (vertex instanceof Vertex) {
return this.edges.push(new Edge(this,vertex));
}
throw new Error('this is not an vertex')
}
}
class Graph {
addEdge (v1,v2) {
if (v1 instanceof Vertex && v2 instanceof Vertex) {
v1.addEdge(v2);
v2.addEdge(v1);
}
else {
throw new Error(unexpected number of vertices);
}
}
}
}
remove vertex connections
{
class Vertex {
removeEdge(Vertex) {
this.edges = this.edges.filter(item => item.end !== vertex);
}
}
class Graph {
removeEdge(v1,v2) {
if (v1 instanceof Vertex && v2 instanceof Vertex) {
v1.removeEdge(v2);
v2.removeEdge(v1);
}
}
}
}
weighted graphs
{
class Graph {
constructor(isWeighted = false) {
this.vertices = []
this.isWeighted = isWeighted;
}
addEdge(v1,v2,weight) {
const weighted = this.isWeighted ? weight : null;
if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
vertexOne.addEdge(vertexTwo,edgeWeight);
vertexTwo.addEdge(vertexOne,edgeWeight);
} else {
throw new Error('Expected Vertex arguments.');
}
}
}
}
directed graphs
{
class Graph {
constructor(isWeighted = false, isDirected = false) {
this.isDirected = isDirected
}
addEdge() {
const edgeWeight = this.isWeighted ? weight : null;

                         if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
                              vertexOne.addEdge(vertexTwo, edgeWeight);
                              this.isDirected  ? null : vertexTwo.addEdge(vertexOne, edgeWeight);
                         } else {
                              throw new Error('Expected Vertex arguments.');
                         }
               }
               removeEdge() {
                       if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
                         vertexOne.removeEdge(vertexTwo);
                         this.isDirected ? null : vertexTwo.removeEdge(vertexOne);
                    } else {
                         throw new Error('Expected Vertex arguments.');
                    }
               }
          }
     }
