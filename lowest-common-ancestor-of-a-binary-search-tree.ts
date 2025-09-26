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
    //Solution 1 - DFS
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
    
    //Solution 2 - more concise
    if (root === null) return null;

    // If both p and q are smaller than root, go to left subtree
    if (root.val > p.val && root.val > q.val)
        return lowestCommonAncestor(root.left, p, q);

    // If both p and q are greater than root, go to right subtree
    if (root.val < p.val && root.val < q.val)
        return lowestCommonAncestor(root.right, p, q);

    // If nodes p and q are on the opposite sides, root is the LCA
    return root;
};