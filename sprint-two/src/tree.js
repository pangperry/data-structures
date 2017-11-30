var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function (target) {
  var results = [];
  if (this.value === target) {
    results.push(true);
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      results.push(true);
    } 

    results = results.concat(this.children[i].contains(target));
  }

  return results.includes(true);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
