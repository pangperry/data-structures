// var extend = function(target, source) {
//   for (key in source) {
//     target[key] = source[key];
//   }
// };

var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  //test says not to extend this
  _.extend(someInstance, stackMethods);
  return someInstance;
};

stackMethods = {};

stackMethods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function() {
  var temp = this.storage[this.count];
  this.count--;
  return temp;
};

stackMethods.size = function() {
  if (this.count < 0) {
    this.count = 0;
  }
  return this.count;
};