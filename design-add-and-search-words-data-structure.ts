//Solution 1 - DFS
class TrieNode {
    public children: Record<string, TrieNode>;
    public isEndOfWord: boolean;

    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let node: TrieNode = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word: string): boolean {
        const dfs = (node: TrieNode, i: number) => {
            if (i === word.length) return node.isEndOfWord;

            const char = word[i];
            if (char === ".") {
                for (let child of Object.values(node.children)) {
                    if (dfs(child, i + 1)) return true;
                }
                return false;
            } else {
                if (!node.children[char]) return false;
                return dfs(node.children[char], i+ 1);
            }
        };
        return dfs(this.root, 0);
    }
}


//Solution 2
// interface Dict {
//     [key: string]: Dict
// }

// class WordDictionary {
//     private dict: Dict;

//     constructor() {
//         this.dict = {};
//     }

//     addWord(word: string): void {
//         const chars = word.split("");
//         let acc = this.dict;

//         for (const char of chars) {
//             if (!acc[char]) {
//                 acc[char] = {};
//             }
//             acc = acc[char];
//         }

//         acc["_"] = {};
//     }

//     search(word: string, acc: Dict = this.dict): boolean {
//         const chars = word.split("");
//         const char = chars[0];

//         if (chars.length === 0 && acc["_"]) return true;

//         if (char === ".") {
//             for (let key in acc) {
//                 if (this.search(word.slice(1), acc[key])) return true;
//             }
//             return false;
//         } else if (!acc[char]) return false;

//         return this.search(word.slice(1), acc[char]);        
//     }
// }

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */