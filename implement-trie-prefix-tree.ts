// class TrieNode {
//     public children: Record<string, TrieNode | undefined>;
//     public isEndOfWord: boolean;

//     constructor() {
//         this.children = {};
//         this.isEndOfWord = false;
//     }
// }

class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node: TrieNode = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char]!;
        }
        node.isEndOfWord = true;
    }

    search(word: string): boolean {
        let node: TrieNode = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char]!;
        }
        return node.isEndOfWord;
    }

    startsWith(prefix: string): boolean {
        let node: TrieNode = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char]!;
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */