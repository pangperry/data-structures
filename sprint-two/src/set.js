var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  set._storage[item] = true;
};

setPrototype.contains = function(item) {
  return !!set._storage[item];
};

setPrototype.remove = function(item) {
  delete set._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
var set = Set();
set.add(9);
set.add(10);
set.contains(8);
set.remove(9);