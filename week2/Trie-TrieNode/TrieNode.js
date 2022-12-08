class TrieNode {
  constructor(key, children, isWord) {
    this.key = key;
    this.children = {};
    this.isWord = false;
  }
}

module.exports = TrieNode;
