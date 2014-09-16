describe('Insert', function() {

  it('should contain a value added to it', function() {
    var t = new Trie();
    t.insert('sound');
    t.insert('sounder');
    t.insert('soundest');
    t.insert('maul');
    expect(t.contains('sound')).to.equal(true);
    expect(t.contains('sounder')).to.equal(true);
    expect(t.contains('soundest')).to.equal(true);
    expect(t.contains('maul')).to.equal(true);
  });

  it('should contain two strings if one is a subset of the other', function() {
    var t = new Trie();
    t.insert('sound');
    t.insert('sounder');
    expect(t.contains('sound')).to.equal(true);
    expect(t.contains('sounder')).to.equal(true);
  });

  it('should test something im not sure of', function() {
    var t = new Trie();
    t.insert("abc");
    t.insert("ac");
    expect(t.contains("ab")).to.equal(false);
  })
});