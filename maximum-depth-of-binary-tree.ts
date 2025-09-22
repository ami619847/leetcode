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

//space complexity: O(h) - h is the height of the tree
//time complexity: O(n) - n is the number of nodes in the tree

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};