var DoubleLinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (!list.tail) {
      list.head = node;
      list.tail = node;
    } else {
      node.next = list.tail;
      list.tail.previous = node;
      list.tail = node;
    }
  };
  list.removeHead = function() {};
  list.contains = function(value) {};
  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};