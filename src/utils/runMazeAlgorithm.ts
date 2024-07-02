import { GridType, MazeType, SpeedType, TileType } from "./types"
import binaryTree from "../lib/algorithms/maze/binaryTree"
import constructBorder from "./constructBorder"
import recursiveDivision from "../lib/algorithms/maze/recursiveDivision"
import { MAX_COLUMN, MAX_ROW, SPEEDS } from "./constants"

interface runMazeAlgorithmParams {
    maze: MazeType
    grid: GridType
    startTile: TileType
    endTile: TileType
    setIsDisabled: (isDisabled: boolean) => void
    speed: SpeedType
}

export async function runMazeAlgorithm({
    maze, grid, startTile, endTile, setIsDisabled, speed
}: runMazeAlgorithmParams) {
    if (maze === 'BINARY_TREE') {
        await binaryTree(grid, startTile, endTile, setIsDisabled, speed)
    } else if (maze === 'RECURSIVE DIVISION') {
        const currentSpeed = SPEEDS.find(s => s.value === speed)!.value ?? 2
        await constructBorder(grid, startTile, endTile)
        await recursiveDivision({
            grid, 
            startTile, 
            endTile, 
            row: 1, 
            col: 1, 
            height: Math.floor((MAX_ROW - 1) / 2),
            width: Math.floor((MAX_COLUMN - 1) / 2),
            setIsDisabled,
            speed
        })
        setTimeout(() => {
            setIsDisabled(false)
        }, 800 * currentSpeed)
    }
}