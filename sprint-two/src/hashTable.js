

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
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index)) {
    for (var i = 0; i < this._storage.get(index).length; i++)  {
      if (this._storage.get(index)[i][0] === k) {
        // this._storage.get(index)[1] = v;
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
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


