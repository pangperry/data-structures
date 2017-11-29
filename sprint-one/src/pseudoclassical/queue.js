var Queue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.size = function() {
  if (this.head > this.tail) {
    this.head = this.tail;
  }
  return this.tail - this.head;
};
Queue.prototype.enqueue = function(value) {
  this.tail++;  
  this.storage[this.tail] = value;
};
Queue.prototype.dequeue = function() {
  this.head++;
  return this.storage[this.head]; 
}; 