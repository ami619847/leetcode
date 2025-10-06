// time complexity: O(N) where N is the number of positions explored until we reach the target
// space complexity: O(N) for the queue and visited set 

function minKnightMoves(x: number, y: number): number {
    // Offset coordinates to handle negative values
    // Adding 310 ensures all coordinates are positive (safe range for -300 to 300)
    x += 310;
    y += 310;

    let minMoves = 0;

    //bfs queue to store positions to explore
    let queue: [ number, number][] = [[310, 310]]; //starting position (0,0) offset to (310,310)

    const visited: boolean[][] = Array(700).fill(null).map(() => Array(700).fill(false));
    visited[310][310] = true;

    // 8 possible knight moves
    const directions: [number, number] [] = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    //bfs to find the shortest path
    while (queue.length > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            //get current position from the queue
            const [currX, currY] = queue.shift()!;
            //check if we reached the target position
            if (currX === x && currY === y) {
                return minMoves;
            }

            //explore all 8 possible knight moves from the current position
            for (const move of directions) {
                const nextX = currX + move[0];
                const nextY = currY + move[1];

                //check if the new position is within bounds and not visited
                if (nextX >= 0 && nextX < 700 && nextY >= 0 && nextY < 700 && !visited[nextX][nextY]) {
                    visited[nextX][nextY] = true;
                    queue.push([nextX, nextY]);
                }
            }
        }

        //increment the move count after exploring all positions at the current level
        minMoves++;
    }
    return -1; //should never reach here for valid inputs, solution always exists
}
