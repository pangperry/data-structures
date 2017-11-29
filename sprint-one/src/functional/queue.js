var Queue = function() {
  var someInstance = {};
  var storage = {};
  var head = 0;
  var tail = 0;

  someInstance.enqueue = function(value) {
    tail++;
    storage[tail] = value;
  };

  someInstance.dequeue = function() {
    head++;
    return storage[head];
  };

  someInstance.size = function() {
    if (head > tail) {
      head = tail;
    }
    return tail - head;
  };

  return someInstance;
};
