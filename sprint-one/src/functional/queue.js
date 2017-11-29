var Queue = function () {
  var someInstance = {};
  var storage = {};
  var tail = 0;
  var head = 0;

  someInstance.enqueue = function (value) {
    tail++;
    storage[tail] = value;
  };

  someInstance.dequeue = function () {
    head++;
    return storage[head];
  };

  someInstance.size = function () {
    if (head >= tail) {
      head = tail;
      return 0;
    }
    return tail - head;
  };

  return someInstance;
}

// var q = Queue();

// console.log(q.enqueue('a'));
// console.log(q.enqueue('b'));
// console.log(q.dequeue());
// console.log(q.dequeue());
