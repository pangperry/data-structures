var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.head = 0;
  someInstance.tail = 0;
  someInstance.storage = {};
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.size = function() {
  if (this.head > this.tail) {
    this.head = this.tail;
  }
  return this.tail - this.head;
};

queueMethods.enqueue = function(value) {
  this.tail++;
  this.storage[this.tail] = value;  
};

queueMethods.dequeue = function() {
  this.head++;
  return this.storage[this.head];
};