$(function() {
  var max = 100000;
  $('div .func').on('click', 'button', function(e) {
    e.preventDefault();
    var list = [];
    for (var i = 0; i < max; i++) {
      var a = Queue();
      a.enqueue(5);
      a.enqueue(6);
      a.enqueue(7);
      a.enqueue(8);
      a.enqueue(9);
      a.enqueue(10);
      a.dequeue()
      a.dequeue()
      a.dequeue()
      list.push(a);
      var b = Stack();
      b.push(5);
      b.push(6);
      b.push(7);
      b.push(8);
      b.push(9);
      b.size();
      b.pop();
      b.pop();
      b.pop();
      list.push(b);
    }
    console.log(list);
    console.log('done functional');
  });

  $('div .fShared').on('click', 'button', function(e) {
    e.preventDefault();
    var list = [];
    for (var i = 0; i < max; i++) {
      var a = Queue();
      a.enqueue(5);
      a.enqueue(6);
      a.enqueue(7);
      a.enqueue(8);
      a.enqueue(9);
      a.enqueue(10);
      a.dequeue()
      a.dequeue()
      a.dequeue()
      list.push(a);
      var b = Stack();
      b.push(5);
      b.push(6);
      b.push(7);
      b.push(8);
      b.push(9);
      b.size();
      b.pop();
      b.pop();
      b.pop();
      list.push(b);
    }
    console.log(list);
    console.log('done functional-shared');
  });

  $('div .proto').on('click', 'button', function(e) {
    e.preventDefault();
    var list = [];
    for (var i = 0; i < max; i++) {
      var a = Queue();
      a.enqueue(5);
      a.enqueue(6);
      a.enqueue(7);
      a.enqueue(8);
      a.enqueue(9);
      a.enqueue(10);
      a.dequeue()
      a.dequeue()
      a.dequeue()
      list.push(a);
      var b = Stack();
      b.push(5);
      b.push(6);
      b.push(7);
      b.push(8);
      b.push(9);
      b.size();
      b.pop();
      b.pop();
      b.pop();
      list.push(b);
    }
    console.log(list);
    console.log('done prototypal');
  });
  $('div .pseudo').on('click', 'button', function(e) {
    e.preventDefault();
    var list = [];
    for (var i = 0; i < max; i++) {
      var a = new Queue();
      a.enqueue(5);
      a.enqueue(6);
      a.enqueue(7);
      a.enqueue(8);
      a.enqueue(9);
      a.enqueue(10);
      a.dequeue()
      a.dequeue()
      a.dequeue()
      list.push(a);
      var b = new Stack();
      b.push(5);
      b.push(6);
      b.push(7);
      b.push(8);
      b.push(9);
      b.size();
      b.pop();
      b.pop();
      b.pop();
      list.push(b);
    }
    console.log(list);
    console.log('done pseudo classical');
  });

});