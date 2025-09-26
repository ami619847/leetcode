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

function countNodes(root: TreeNode | null): number {
    if(!root) return 0;

    function getHeight(node) {
        let h = 0;
        while (node) {
            h++;
            node = node.left;
        }
        return h;
    }

    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);

    if (leftHeight === rightHeight) {
        // Left subtree is perfect → 2^height - 1 + recurse on right
        // Adding 1 for the root node before recursing on right
        return ( (2 ** leftHeight -1) +1) + countNodes(root.right);
    } else {
        // Right subtree is perfect but shorter → recurse on left
        // Adding 1 for the root node before recursing on left
        return ( (2 ** rightHeight -1) +1) + countNodes(root.left);
    }
};