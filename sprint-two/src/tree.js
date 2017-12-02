var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  _.extend(newTree, treeMethods);
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

treeMethods.traverse = function(cb) {
  debugger;
  cb(this);

  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb);
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
