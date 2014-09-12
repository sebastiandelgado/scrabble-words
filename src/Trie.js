var Trie = function(){
  this.root = new TrieNode();
  this.size = 0;
};

Trie.prototype.insert = function(s){
	var node = this.root;
	for (var i = 0; i < s.length; i++) {
		letter = s.charAt(i);
		if (node.letters[letter] === undefined) {
			node.letters[letter] = new TrieNode();
		}
		node = node.letters[letter];
	}
	node.wordEnd = true;
};

Trie.prototype.logContents = function(cWord, node) {
	this.root.logContents('');
}

Trie.prototype.contains = function(s){
	var node = this.root;
	for (var i = 0; i < s.length; i++) {
		letter = s.charAt(i);
		if (node.letters[letter] === undefined) {
			return false
		} else {
			node = node.letters[letter];
		}
	}
	return node.wordEnd;
};


var TrieNode = function(){
  this.size = 0;
  this.letters = {}; // k=letter; v=nextTrie
  this.wordEnd = false;
};

TrieNode.prototype.logContents = function(currentWord) {
	if (this.wordEnd) {
		console.log(currentWord);
	}
	for (var l in this.letters) {
		this.letters[l].logContents(currentWord + l);
	}
}

