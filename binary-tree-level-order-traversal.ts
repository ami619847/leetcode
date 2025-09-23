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

function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) return [];

    let q = [root]; //queue
    let res: number[][] = [];

    while (q.length) {
        let len = q.length;
        let currLev: number[] = [];

        for (let i: number = 0; i < len; i++) {
            // Add front of queue and remove it from queue
            let node: TreeNode | null = q.shift() ?? null;
            currLev.push(node!.val);

            if (node && node.left) q.push(node.left);
            if (node && node.right) q.push(node.right);
        }

        res.push(currLev);
    }

    return res;
};
