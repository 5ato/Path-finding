import { MAX_COLUMN, MAX_ROW, SPEEDS } from "./constants";
import { isRowColEqualTile } from "./helpers";
import { SpeedType, TileType } from "./types";

export default function createWall(
    startTile: TileType,
    endTile: TileType,
    speed: SpeedType
) {
    const delay = 6 * SPEEDS.find(s => s.value === speed)!.value - 1
    for (let row = 0; row < MAX_ROW; row++) {
        setTimeout(() => {
            for (let col = 0; col < MAX_COLUMN; col++) {
                if ((row % 2 === 0) || (col % 2 === 0)) {
                    if (!isRowColEqualTile(row, col, startTile) && !isRowColEqualTile(row, col, endTile)) {
                        setTimeout(()=> {
                            document.getElementById(`${row}-${col}`)!.className = 'default-Tile tile-wall'
                        }, delay * col)
                    }
                }
            }
        })
    }
}