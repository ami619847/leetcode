/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getMinimumDifference(root: TreeNode | null): number {
    let prev: number | null = null;
    let res = Infinity; // min difference

    function dfs(node: TreeNode | null) {
        if (!node) return;
        dfs(node.left);
        if (prev !== null) {
            res = Math.min(res, node.val - prev);
        }
        prev = node.val;
        dfs(node.right);
    }

    dfs(root);
    
    return res;
};