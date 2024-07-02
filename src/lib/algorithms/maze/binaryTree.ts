import { MAX_COLUMN, MAX_ROW } from "../../../utils/constants";
import createWall  from "../../../utils/createWall";
import destroyWall from "../../../utils/destroyWall";
import { getRandomNumber, isEqual, sleep } from "../../../utils/helpers";
import { GridType, SpeedType, TileType } from "../../../utils/types";

export default async function binaryTree(
    grid: GridType,
    startTile: TileType,
    endTile: TileType,
    setIsDisabled: (isDisabled: boolean) => void,
    speed: SpeedType
) {
    createWall(startTile, endTile, speed)
    await sleep(MAX_ROW * MAX_COLUMN)

    for (const row of grid) {
        for (const tile of row) {
            if ((tile.row % 2 === 0) || (tile.col % 2 === 0)) {
                if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
                    tile.isWall = true
                }
            }
        }
    }
    for (let row = 1; row < MAX_ROW; row += 2) {
        for (let col = 1; col < MAX_COLUMN; col += 2) {
            if ((row === (MAX_ROW - 2)) && (col === (MAX_COLUMN - 2))) {
                continue
            } else if (row === MAX_ROW - 2) {
                await destroyWall(grid, row, col, 1, speed)
            } else if (col === MAX_COLUMN - 2) {
                await destroyWall(grid, row, col, 0, speed)
            } else {
                await destroyWall(grid, row, col, getRandomNumber(0, 2), speed)
            }
        }
    }
    setIsDisabled(false)
}