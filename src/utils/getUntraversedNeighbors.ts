import { MAX_COLUMN, MAX_ROW } from "./constants";
import { GridType, TileType } from "./types";

export default function getUntraversedNeighbors(grid: GridType, tile: TileType) {
    const {row, col} = tile
    const neighbors = []

    if (row > 0) {
        neighbors.push(grid[row - 1][col]);
      }
      if (row < MAX_ROW - 1) {
        neighbors.push(grid[row + 1][col]);
      }
      if (col > 0) {
        neighbors.push(grid[row][col - 1]);
      }
      if (col < MAX_COLUMN - 1) {
        neighbors.push(grid[row][col + 1]);
      }

    return neighbors.filter((neighbor) => !neighbor.isTraversed)
}