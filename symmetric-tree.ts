/**
 * Definition for a binary tree node.
 */
class TreeNode2 {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function isSymmetric(root: TreeNode2 | null): boolean {
    if (!root) return true;

    let isInverse = (n1: TreeNode | null, n2: TreeNode | null): boolean => {
        if (!n1 && !n2) return true;
        if (!n1 || !n2) return false;

        return n1.val === n2.val && isInverse(n1.left, n2.right) && isInverse(n1.right, n2.left);
    }

    return isInverse(root.left, root.right);
};