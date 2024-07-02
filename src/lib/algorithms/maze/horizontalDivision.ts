import { SPEEDS } from "../../../utils/constants"
import { getRandomNumber, isEqual, sleep } from "../../../utils/helpers"
import recursiveDivision, { RecursiveDivisionParams } from "./recursiveDivision"

interface horizontalDivisionParams extends RecursiveDivisionParams{}


export default async function horizontalDivision({
    grid,
    startTile,
    endTile,
    row,
    col,
    height,
    width,
    setIsDisabled,
    speed,
  }: horizontalDivisionParams) {
    const makeWallAt = row + getRandomNumber(0, height - 1) * 2 + 1
    const makePassageAt = col + getRandomNumber(0, width) * 2
  
    for (let i = 0; i < 2 * width - 1; i += 1) {
      if (makePassageAt !== col + i) {
        if (
          !isEqual(grid[makeWallAt][col + i], startTile) &&
          !isEqual(grid[makeWallAt][col + i], endTile)
        ) {
          grid[makeWallAt][col + i].isWall = true
  
          document.getElementById(`${makeWallAt}-${col + i}`)!.className = 'tile-wall default-Tile'
          await sleep(10 * SPEEDS.find((s) => s.value === speed)!.value - 5)
        }
      }
    }
  
    await recursiveDivision({grid, startTile, endTile, row, col, height: (makeWallAt - row + 1) / 2, width, setIsDisabled, speed})
    await recursiveDivision({grid, startTile, endTile, row: makeWallAt + 1, col, height: height - (makeWallAt - row + 1) / 2, width, setIsDisabled, speed})
}