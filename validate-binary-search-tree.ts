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

function isValidBST(root: TreeNode | null): boolean {
    // if you go to the right - update min, if you got to the left - update max
    function valid(node: TreeNode | null, min: number, max: number): boolean {
        if (!node) return true;

        if (!(node.val > min && node.val < max)) return false;

        return valid(node.left, min, node.val) && valid(node.right, node.val, max);
    }

    return valid(root, -Infinity, Infinity);    
};