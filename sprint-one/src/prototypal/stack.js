var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
//   // but try not not reference your old code in writing the new style.
};

//tests disspear if you remove this lin;
var stackMethods = {};

// Stack.prototype = stackMethods;
stackMethods.size = function() {
  if (this.count < 0) {
    this.count = 0;
  }
  return this.count;
};

stackMethods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function() {
  var temp = this.storage[this.count];
  this.count--;
  return temp;
};
