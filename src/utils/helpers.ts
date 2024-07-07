import { END_TILE_CONF, MAX_COLUMN, MAX_ROW, START_TILE_CONF } from "./constants";
import { GridType, TileType } from "./types";

export default function createGrid(startTile: TileType, endTile: TileType) {
    let grid: GridType = []
    for (let row = 0; row < MAX_ROW; row++) {
        let currentRow: TileType[] = []
        for (let col = 0; col < MAX_COLUMN; col++) {
            currentRow.push({
                row, col,
                isEnd: row === endTile.row && col === endTile.col,
                isWall: false,
                isPath: false,
                distance: Infinity,
                isTraversed: false,
                isStart: row === startTile.row && col === startTile.col,
                parent: undefined
            })
        }
        grid.push(currentRow)
    }
    return grid
}

export function checkIsStartOrEnd(row: number, col: number) {
    return (row === START_TILE_CONF.row && col === START_TILE_CONF.col) || (row === END_TILE_CONF.row && col === END_TILE_CONF.col)
}

export function createNewGrid(grid: GridType, row: number, col: number) {
    const newGrid = grid.slice()
    const newTile = {
        ...newGrid[row][col],
        isWall: !newGrid[row][col].isWall
    }
    newGrid[row][col] = newTile
    return newGrid
}

export function isEqual(a: TileType, b: TileType) {
    return a.row === b.row && a.col === b.col
}

export function isRowColEqualTile(row: number, col: number, tile: TileType) {
    return row === tile.row && col === tile.col
}

export function sleep(ms: number) {
    return new Promise((resolve => setTimeout(resolve, ms)))
}

export function getRandomNumber(min: number, max:number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min) + min)
}

export function checkStack(tile: TileType, stack: TileType[]) {
    for (let i = 0; i < stack.length; i++) {
        if (isEqual(stack[i], tile)) return true
    }
    return false
}

export function dropFromQueue(tile: TileType, queue: TileType[]) {
    for (let i = 0; i < queue.length; i++) {
        if (isEqual(tile, queue[i])) {
            queue.splice(i, 1)
            break
        }
    }
}
