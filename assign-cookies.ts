//time: O(n log n), space: O(1)

function findContentChildren(g: number[], s: number[]): number {
    let contentChildren: number = 0;
    let cookieIndex: number = 0;

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    while (cookieIndex < s.length) {
        if (s[cookieIndex] >= g[contentChildren]) contentChildren++;
        cookieIndex++;
    }

    return contentChildren;
};