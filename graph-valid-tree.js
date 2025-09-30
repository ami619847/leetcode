class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length > n-1) return false;

        const adj = Array.from({length: n}, () => []);

        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u)

        }

        let visited = new Set();
        let q = new Queue([[0, -1]]); //[curr node, parent node]
        visited.add(0);

        while (!q.isEmpty()) {
            const [node, parent] = q.pop();

            for (const nei of adj[node]) {
                if (nei === parent) continue
                if (visited.has(nei)) return false;
                visited.add(nei);
                q.push([nei, node]);
            }
        }

        return visited.size === n;
    }
}
