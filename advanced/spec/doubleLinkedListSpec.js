describe('doubleLinkedList', function() {
  var doubleLinkedList;

  beforeEach(function() {
    doubleLinkedList = DoubleLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doubleLinkedList).to.have.property('head');
    expect(doubleLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doubleLinkedList.addToTail).to.be.a('function');
    expect(doubleLinkedList.removeHead).to.be.a('function');
    expect(doubleLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.tail.value).to.equal(5);
    doubleLinkedList.addToTail(6);
    expect(doubleLinkedList.tail.value).to.equal(6);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doubleLinkedList.addToTail(5);
    doubleLinkedList.addToTail(6);
    doubleLinkedList.removeHead(7);
    expect(doubleLinkedList.head.value).to.equal(6);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called' );

  it('should contain a value that was added');

  it('should not contain a value that was removed');

  it('should contain nodes with both next and previous properties');

});
