var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//this won't handle collisions
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var dupes = false;

  if (!this._storage.get(index)) {
    this._storage.set(index, []);
  } 
    for (var i = 0; i < this._storage.get(index).length; i++)  {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = v;
        dupes = true;
      }
    }
  //should check for a pair with the same k, if it's there, it should be replaced with new [k, v]
  if (!dupes) {
    this._storage.get(index).push([k, v]);
  }
  this.rebalance();
};

HashTable.prototype.rebalance = function () {
  var count = 0; 
  var items = [];

  for (var i = 0; i < this._limit; i++) {
    if(this._storage.get(i)) {
      count++;
    }
  }

  if (count / this._limit >= .75) {
    for (var bucket = 0; bucket < this._limit; bucket++) {
      items.concat(this._storage.get(bucket));
    }
    this._limit = this._limit * 2;
    this._storage = LimitedArray(this._limit);
    for (var j = 0; j < items; j++) {
      this.insert(items[j]);
    }
  } else if (count / this._limit < .25 && this._limit > 8) {
    for (var bucket = 0; bucket < this._limit; bucket++) {
      items.concat(this._storage.get(bucket));
    }

    this._limit = this._limit / 2;
    this._storage = LimitedArray(this._limit);

    for (var h = 0; h < items; h++) {
      this.insert(items[h]);
    }
  }
}

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index)) {
    for (var i = 0; i < this._storage.get(index).length; i++)  {
      if (this._storage.get(index)[i][0] === k) {
        return this._storage.get(index)[i][1];
      }
    }

  }
  if (this._storage.get(index)) {
    return this._storage.get(index)[1];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    this._storage.set(index, null); 
  }

  this.rebalance();
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


