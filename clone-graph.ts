/**
 * Definition for _Node.
 */
class _Node {
    val: number
    neighbors: _Node[]

    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val === undefined ? 0 : val)
        this.neighbors = (neighbors === undefined ? [] : neighbors)
    }
}




function cloneGraph(node: _Node | null): _Node | null {

    function clone(node: Node | null, visited: Map<Node, Node>): Node | null {
        if (node === null) return node;

        if (visited.has(node)) {
            return visited.get(node);
        }

        let copy = new Node(node.val);
        visited.set(node, copy);

        for (const neighbor of node.neighbors) {
            copy.neighbors.push(clone(neighbor, visited));
        }

        return copy;
    }

    let visited = new Map<Node, Node>();
    return clone(node, visited);
};