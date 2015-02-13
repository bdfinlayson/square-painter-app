/* jshint mocha: true, expr: true */

describe('test suite', function() {
  it('should assert true', function() {
    true.should.be.true;
    false.should.be.false;
  });
});

describe('should return world', function() {
  it('should return world', function() {
    hello().should.equal('world');
  })
})

describe('should add up', function() {
  it('should return 4', function() {
    addUp(2).should.equal(4);
  })
})
