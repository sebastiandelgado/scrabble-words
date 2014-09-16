var findScrabbleWords = function(trieDictionary) {

	var allTiles = {
		e:12,
		a:9, i:9,
		o:8,
		n:6, r:6, t:6,
		l:4, s:4, u:4, d:4,
		g:3,
		b:2, c:2, m:2, p:2, f:2, h:2, v:2, w:2, y:2,
		k:1, j:1, x:1, q:1, z:1
	};
	var verifyScrabbleWord = function(word) {
		var wordLetters = {};
		
	};
	var cloneTiles = function(tiles) {
		var clone = {};
		for (var k in tiles) {
			clone[k] = tiles[k];
		}
		return clone;
	};

	var wordsFound = []; // change to a trie when possible
	
	// do a depth first search recursive traversal
	// keep track of the current word
	// validate scrabble words
	// push to words found

	// will check the current node to see if wordsofar is completed
	// Will then make a recursive call to every branch that the tiles will let it. 
	var searchTrie = function(node, wordSoFar, tilesLeft) {
		if (node.wordEnd) {
			wordsFound.push(wordSoFar);
		}
		for (var l in node.letters) {
			if(tilesLeft[l] > 0) {
				var newTiles = cloneTiles(tilesLeft);
				newTiles[l]--;
				searchTrie(node.letters[l], wordSoFar+l, newTiles);
			}
		}
	};

	searchTrie(trieDictionary.root, '', allTiles);

	return wordsFound;

	
}

