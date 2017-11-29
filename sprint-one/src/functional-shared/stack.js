var extend = function(target, source) {
  for (key in source) {
    target[key] = source[key];
  }
};

var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;

  //test says not to extend this
  extend(someInstance, Stack.methods);
  return someInstance;
};

Stack.methods = {};
//not supposed to reference this
Stack.methods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Stack.methods.pop = function() {
  var temp = this.storage[this.count];
  this.count--;
  return temp;
};

Stack.methods.size = function() {
  if (this.count < 0) {
    this.count = 0;
  }
  return this.count;
};

// var a = Stack();

// console.log(a);
