var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  
  list.addToTail = function(value) {
    var node = Node(value);
    if (list.tail !== null) {
      node.next = list.tail;
    }
    list.tail = node;
    if (list.head === null) {
      list.head = node;
    }
   //creates new node, assigns node value
   //sets new node next value to the node reference by list head
   //set list head to the new node  
  };

  list.removeHead = function() {
    var start, former;

    if (list.tail.next === null) {
      list.tail = null;
      list.head = null;
    } else {
      start = list.tail;
      while (start.next.next !== null) {
        start = start.next;
      }
      former = start.next;
      list.head = start;
      list.head.next = null;
    }
    return former;
  };


  list.contains = function(target) {
    var start = list.tail;
    if (start.value === target) {
      return true; 
    }
    
    while (start.next.next !== null) {
      start = start.next;
      if (start.value === target) {
        return true;
      }
    }
    
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
var list = LinkedList();

list.addToTail(5)
/*
 * Complexity: What is the time complexity of the above functions?
 */
