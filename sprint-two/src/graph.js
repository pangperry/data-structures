

// Instantiate a new graph
var Graph = function() {
  this.vertices = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //adjacency list representing vertices and related edges, from current node to connected pair;
  this.vertices[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this.vertices[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var relatedNodes = this.vertices[node];

  for (var i = 0; i < relatedNodes.length; i++) {
    this.removeEdge(relatedNodes[i], node);
  }

  delete this.vertices[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.vertices[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.vertices[fromNode].push(toNode);
  this.vertices[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.vertices[fromNode].indexOf(toNode);
  if (index >= 0) {
    this.vertices[fromNode].splice(index, 1);
  }
  index = this.vertices[toNode].indexOf(fromNode);
  if (index >= 0) {
    this.vertices[toNode].splice(index, 1);
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (vertex in this.vertices) {
    cb(vertex);
  }
};

var graph = new Graph();
graph.addNode(4);
graph.addNode(5);
graph.addEdge(5, 4);
graph.removeEdge(5, 4);
/*
 * Complexity: What is the time complexity of the above functions?
 */


