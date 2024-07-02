import { SPEEDS } from "../../../utils/constants";
import { getRandomNumber, isEqual, sleep } from "../../../utils/helpers";
import recursiveDivision, { RecursiveDivisionParams } from "./recursiveDivision";

interface verticalDivisionParams extends RecursiveDivisionParams {}

export default async function verticalDivision({
    grid, startTile, endTile, row, col, height, width, setIsDisabled, speed
}: verticalDivisionParams) {
    const makeWallAt = col + getRandomNumber(0, width-1) * 2 + 1
    const makePassageAt = row + getRandomNumber(0, height) * 2

    for (let i = 0; i < 2 * height - 1; i += 1){
        if (makePassageAt !== row + i) {
            if (!isEqual(grid[row + i][makeWallAt], startTile) && !isEqual(grid[row + i][makeWallAt], endTile)) {
                grid[row+i][makeWallAt].isWall = true

                document.getElementById(`${row+i}-${makeWallAt}`)!.className = 'tile-wall default-Tile'
                await sleep(10 * SPEEDS.find(s => s.value === speed)!.value - 5)
            }
        }
    }
    await recursiveDivision({grid, startTile, endTile, row, col, height, width: (makeWallAt - col + 1) / 2, setIsDisabled, speed})
    await recursiveDivision({grid, startTile, endTile, row, col: makeWallAt + 1, height, width: width-(makeWallAt - col + 1) / 2, setIsDisabled, speed})
}