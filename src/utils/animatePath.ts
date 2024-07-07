import { SPEEDS } from "./constants";
import { isEqual } from "./helpers";
import { SpeedType, TileType } from "./types";

export default function animatePath(traversedTiles: TileType[], path: TileType[], startTile: TileType, endTile: TileType, speed: SpeedType) {
    for (let i = 0; i < traversedTiles.length; i++) {
        setTimeout(() => {
            const tile = traversedTiles[i]
            if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
                document.getElementById(`${tile.row}-${tile.col}`)!.className = 'default-Tile tile-traversed'
            }
        }, 8 * i * SPEEDS.find(s => s.value === speed)!.value)
    }
    setTimeout(() => {
        for (let i = 0; i < path.length; i++) {
            setTimeout(() => {
                const tile = path[i]
                if (!isEqual(tile, startTile) && !isEqual(tile, endTile)){
                    document.getElementById(`${tile.row}-${tile.col}`)!.className = 'default-Tile tile-path'
                }
            }, 30 * i * SPEEDS.find(s => s.value === speed)!.value)
        }
    }, 8 * traversedTiles.length * SPEEDS.find(s => s.value === speed)!.value)
}