import { MAX_COLUMN, MAX_ROW } from "./constants";
import { isEqual, sleep } from "./helpers";
import { GridType, TileType } from "./types";

export default async function constructBorder(grid: GridType, startTile: TileType, endTile: TileType) {
    const shapes = [
        {row: 0, col: 1},
        {row: 1, col: 0},
        {row: 0, col: -1},
        {row: -1, col: 0},
    ]

    let row = 0
    let col = 0

    for (let i = 0; i < 4; i++) {
        const direction = shapes[i]

        while (
            row + direction.row >= 0 &&
            row + direction.row < MAX_ROW &&
            col + direction.col >= 0 &&
            col + direction.col < MAX_COLUMN
        ) {
            row += direction.row
            col += direction.col
            if (!isEqual(grid[row][col], startTile) && !isEqual(grid[row][col], endTile)) {
                grid[row][col].isWall = true
                const tileElement = document.getElementById(`${row}-${col}`)
                if (tileElement) {
                    tileElement.classList.toggle('tile-wall')
                }
                await sleep(8)
            }
        }

        if (row < 0) row = 0
        if (row >= MAX_ROW) row = MAX_COLUMN - 1
        if (col < 0) col = 0
        if (col >= MAX_ROW) col = MAX_COLUMN - 1
    }
}