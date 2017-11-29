var Queue = function () {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.tail++;
  this.storage[this.tail] = value;
};

queueMethods.dequeue = function () { 
  this.head++;
  if (this.head > this.tail) {
    this.head = this.tail;
  }
  return this.storage[this.head]; 

};

queueMethods.size = function () { 
  return this.tail - this.head;
};

// var a = Queue();

// console.log(a);
// a.enqueue('a');
// console.log(a);
// a.enqueue('b');

// console.log(a);
// a.dequeue();

// console.log(a);