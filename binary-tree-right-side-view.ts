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

function rightSideView(root: TreeNode | null): number[] {
    if (root === null) return [];

    let q = [root]; //queue
    let res: number[] = [];

     while (q.length) {
        let len: number = q.length;

        for (let i: number = 0; i < len; i++) {
            let node = q.shift();
            if (len === i+1 && node) { //last node value
                res.push(node.val);
            }

            if (node && node.left) q.push(node.left);
            if (node && node.right) q.push(node.right);
        }
    }
    
    return res;
};