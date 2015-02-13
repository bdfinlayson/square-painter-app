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
