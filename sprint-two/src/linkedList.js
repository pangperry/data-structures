var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function (value) {
    var node = Node(value);
    if (list.tail !== null) {
      list.tail.next = node;
      list.tail = node;
    }
    list.tail = node;
    if (list.head === null) {
      list.head = node;
    }
  };

  list.removeHead = function () {
    var val = list.head.value;
    list.head = list.head.next;
    return val;
  };


  list.contains = function (target) {
    var start = list.head;

    if (start.value === target) {
      return true;
    }

    while (start.next !== null) {
      start = start.next;
      if (start.value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};