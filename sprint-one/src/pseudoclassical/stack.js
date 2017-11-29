var Stack = function() {
  this.count = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.size = function() {
  if (this.count < 0 ) {
    this.count = 0;
  }
  return this.count;
};
Stack.prototype.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};
Stack.prototype.pop = function() {
  var temp = this.storage[this.count];
  this.count--;
  return temp;
};


