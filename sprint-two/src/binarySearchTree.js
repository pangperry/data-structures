var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;
  _.extend(tree,BinarySearchTree.Methods);
  return tree;
};

BinarySearchTree.Methods = {};

BinarySearchTree.Methods.insert = function(v) {
  if (v < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(v);
    } else {
      this.left.insert(v)
    }
  } else if (v > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(v);
    } else {
      this.right.insert(v)
    }
  }
}

BinarySearchTree.Methods.contains = function (v) {
  if (v === this.value) {
    return true;
  }
  if (v < this.value) {
    if (!!this.left) {
      if (this.left.contains(v)) {
        return true;
      }
    }
  }

  if (v > this.value) {
    if (!!this.right) {
      if (this.right.contains(v)) {
        return true;
      }
    }
    return false;
  }
};

BinarySearchTree.Methods.depthFirstLog = function(cb) { 
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
