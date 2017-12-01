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

  list.removeHead = function() {
    if (!list.head.next) {
      list.head = null;
      list.tail = null;
    }
    if (list.head.next) {
      list.head = list.head.next;
      list.head.previous = null;
    } 
    //if list.head.next 
      //set list.head.next.previous to null
      //set list.head to list.head.next
    //if !list.head.next
      //set list.head to null
      //set list.tail to null

  };
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