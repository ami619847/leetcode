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

//time complexity: O(h) - h is the height of the tree
//space complexity: O(h) - h is the height of the tree (recursion stack)

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null || root.val === val) return root;

    // Key is greater than root's key
    if (root.val < val)
        return searchBST(root.right, val);

    // Key is smaller than root's key
    return searchBST(root.left, val);
};