import React, { useState, useEffect } from "react";
import Color from "./color";

export default function Bfs({ grid }) {
    const [updatedGrid, setUpdatedGrid] = useState(grid);

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function bfs(grid, startI, startJ) {
        let queue = [[startI, startJ]];
        const visited = new Set();

        while (queue.length > 0) {
            const [currentI, currentJ] = queue.shift();

            if (
                currentI < 0 ||
                currentI >= grid.length ||
                currentJ < 0 ||
                currentJ >= grid[currentI].length ||
                grid[currentI][currentJ] !== 0 ||
                visited.has(`${currentI}-${currentJ}`)
            ) {
                continue;
            }

            visited.add(`${currentI}-${currentJ}`);
            grid[currentI][currentJ] = 1;
            setUpdatedGrid([...grid]);

            await delay(80);

            queue.push([currentI + 1, currentJ]);
            queue.push([currentI - 1, currentJ]);
            queue.push([currentI, currentJ + 1]);
            queue.push([currentI, currentJ - 1]);
        }
    }

    useEffect(() => {
        bfs(updatedGrid, 5, 4);
    }, []);

    return <Color pass={updatedGrid} />;
}

