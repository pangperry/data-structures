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
      list.tail.next = node;
      node.previous = list.tail;
      list.tail = node;
    }
  };

  list.removeHead = function () {
    if (list.head.value) {
      var value = list.head.value;

      if (!list.head.next) {
        list.head = null;
        list.tail = null;
      }

      if (list.head.next) {
        list.head = list.head.next;
        list.head.previous = null;
      }
      return value;
    }
  };

  list.contains = function (value) {
    var start = list.head;
    if (!start) {
      return false;
    }
    if (start.value === true) {
      return true;
    }

    while (start) {
      if (start.value === value) {
        return true;
      }
      start = start.next;
    }

    return false;
   };
  
  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};