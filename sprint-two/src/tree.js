var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  //I think this might be cheating
  newTree.parent = null;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = new Tree(value);
  node.parent = this;
  this.children.push(node);
};

treeMethods.contains = function (target) {
  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
     if (this.children[i].contains(target)) {
       return true;
     }
  }

  return false;
};

//figure this out!!:w

treeMethods.removeFromParent = function() {
  var parentNode = this.parent;
  var target = this.value;
  var newTree;
  for (var i = 0; i < parentNode.children.length; i++) {
    if (parentNode.children[i].value === target) {
      newTree = parentNode.children.splice(i,1);
      newTree.parent = null;
    }
  }

  return newTree;
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
