/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

// Time Complexity: O(n) - we visit each node once
// Space Complexity: O(m) - m is the maximum number of nodes at any level (width of the tree)

function averageOfLevels(root: TreeNode | null): number[] {
    if (root === null) return [];

    let q: Array<TreeNode> = [root]; // queue
    let res: Array<number> = [];

    while (q.length) {
        let len: number = q.length;
        let sum: number = 0;

        for (let i: number = 0; i < len; i++) {
            let node = q.shift();
            sum += node!.val;
            if (node!.left) q.push(node!.left);
            if (node!.right) q.push(node!.right);
        }

        res.push(sum / len);
    }

    return res;
};
