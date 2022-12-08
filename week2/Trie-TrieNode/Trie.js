const TrieNode = require("./TrieNode");

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }
  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length - 1; i++) {
      node.key = word[i];
      node.children[`${word[i + 1]}`] = new TrieNode(word[i + 1]);
      node.isWord = false;
      if (i === word.length - 2) {
        node.key = word[i];
        node.children[`${word[i + 1]}`] = new TrieNode(word[i + 1]);
        node.isWord = true;
      }
    }
  }
}

module.exports = Trie;
