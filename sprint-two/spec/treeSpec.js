describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree(1);
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });
   
  it('should have a parent property that refers to parent node or null', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].addChild(9);
    tree.children[1].addChild(8);
    expect(tree.children[0].parent).to.equal(tree);
  });
  it('should have a removeFromParent method', function() {
    tree.addChild(6);
    tree.children[0].addChild(7);
    expect(tree.children[0].removeFromParent).to.be.a('function');
  }); 
  it('should disassociate a tree from its parent', function() {
    tree.addChild(5);
    tree.children[0].removeFromParent();
    // expect(child.parent).to.equal(null);
    expect(tree.children.length).to.equal(0);
  });

  it('should invoke a callback on each node', function() {
    var count = 0;
    var cb = function(node) {
      if (typeof node.value === 'number') {
        count += node.value;
      }
    };
    tree.addChild(5);
    tree.addChild(5);
    tree.addChild(10);
    tree.children[0].addChild(5);
    tree.traverse(cb);
    console.log('count: '+ count);
    expect(count).to.equal(26);
  });
});
