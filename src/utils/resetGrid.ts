import { END_TILE_CONF, MAX_COLUMN, MAX_ROW, START_TILE_CONF } from "./constants";
import { isEqual } from "./helpers";
import { GridType, TileType } from "./types";

interface ResetGridParams {
    grid: GridType,
    startTile?: TileType
    endTile?: TileType
}

export function resetGrid({ grid, startTile = START_TILE_CONF, endTile = END_TILE_CONF }: ResetGridParams) {
    for (let row = 0; row < MAX_ROW; row++) {
        for (let col = 0; col < MAX_COLUMN; col++){
            const tile = grid[row][col]
            tile.distance = Infinity
            tile.isTraversed = false
            tile.isPath = false
            tile.parent = undefined
            tile.isWall = false

            if (!isEqual(startTile, tile) && !isEqual(endTile, tile)) {
                const tileElement = document.getElementById(`${tile.row}-${tile.col}`)

                if (tileElement) {
                    tileElement.className = 'default-Tile'
                }
            }
        }
    }
}