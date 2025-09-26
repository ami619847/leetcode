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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    function dfs(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null) {
        if([root, p, q].includes(null)) return root;
        
        // LCS is in the right subtree if both values are greater that root
        if (p.val > root.val && q.val > root.val) {
            return dfs(root.right, p, q);
        }

        // LCS is in the left if both values are less that the root
        if (p.val < root.val && q.val < root.val) {
            return dfs(root.left, p, q);
        }

        //if a split, then the lcs is there
        return root;
    };

    return dfs(root, p, q);   
};