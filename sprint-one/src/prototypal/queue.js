var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  if (this.head > this.tail) {
    this.head = this.tail;
  }
  return this.tail - this.head;
};

queueMethods.push = function(value) {
  this.tail++;
  this.storage[this.tail] = value;
};
queueMethods.pop = function() {
  this.head++;
  return this.storage[this.head];
};

// var q = Queue();

// console.log(q);