import React, { useState, useEffect } from "react";
import Color from "./color";

export default function AStar({ grid }) {
    const [updatedGrid, setUpdatedGrid] = useState(grid);

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function calculateDistance(i, j, targetI, targetJ) {
        return Math.abs(i - targetI) + Math.abs(j - targetJ);
    }

    async function aStar(grid, startI, startJ, targetI, targetJ) {
        const queue = [[startI, startJ]];
        const visited = new Set();
        const distance = [];

        for (let i = 0; i < grid.length; i++) {
            distance[i] = [];
            for (let j = 0; j < grid[i].length; j++) {
                distance[i][j] = Infinity;
            }
        }

        distance[startI][startJ] = 0;

        while (queue.length > 0) {
            const [currentI, currentJ] = queue.shift();
            visited.add(`${currentI}-${currentJ}`);

            if (currentI === targetI && currentJ === targetJ) {
                return;
            }

            const neighbors = [
                [currentI + 1, currentJ],
                [currentI - 1, currentJ],
                [currentI, currentJ + 1],
                [currentI, currentJ - 1],
            ];

            for (const [neighborI, neighborJ] of neighbors) {
                if (
                    neighborI >= 0 &&
                    neighborI < grid.length &&
                    neighborJ >= 0 &&
                    neighborJ < grid[neighborI].length &&
                    grid[neighborI][neighborJ] !== 1 &&
                    !visited.has(`${neighborI}-${neighborJ}`)
                ) {
                    const newDistance =
                        distance[currentI][currentJ] +
                        await calculateDistance(neighborI, neighborJ, targetI, targetJ);

                    if (newDistance < distance[neighborI][neighborJ]) {
                        distance[neighborI][neighborJ] = newDistance;
                        queue.push([neighborI, neighborJ]);
                    }
                }
            }

            setUpdatedGrid([...grid]);
            await delay(50);
        }
    }

    useEffect(() => {
        const startI = 0;
        const startJ = 0;
        const targetI = grid.length - 1;
        const targetJ = grid[0].length - 1;

        aStar(updatedGrid, startI, startJ, targetI, targetJ); }, []);

    return (
        <>
            <Color pass={updatedGrid} />
        </>
    );
}
