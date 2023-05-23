import React, { useState, useEffect } from "react";
import Color from "./color";

export default function Dfs({ grid }) {
    const [updatedGrid, setUpdatedGrid] = useState(grid);

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function dfs(grid, i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] !== 0) {
            return;
        }

        grid[i][j] = 1;
        setUpdatedGrid([...grid]);

        await delay(80);
        await dfs(grid, i + 1, j);
        await dfs(grid, i - 1, j);
        await dfs(grid, i, j - 1);
        await dfs(grid, i, j + 1);
    }

    useEffect(() => {
        dfs(updatedGrid, 5, 4);
    }, []);

    return (
        <>
            <Color pass={updatedGrid} />
        </>
    );
}

