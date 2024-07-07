import bfs from "../lib/algorithms/pathfinding/bfs"
import dfs from "../lib/algorithms/pathfinding/dfs"
import dijkstra from "../lib/algorithms/pathfinding/dijkstra"
import { AlgorithmType, GridType, TileType } from "./types"

type runPathFindingAlgorithmProps = {
    algorithm: AlgorithmType
    grid: GridType
    startTile: TileType
    endTile: TileType
}

export default function runPathFindingAlgorithm({ algorithm, grid, startTile, endTile }: runPathFindingAlgorithmProps) {
    switch (algorithm) {
        case 'BFS':
            return bfs(grid, startTile, endTile)
        case 'DFS':
            return dfs(grid, startTile, endTile)
        case 'DIJKSTRA':
                return dijkstra(grid, startTile, endTile)
        default:
            return bfs(grid, startTile, endTile)
    }
}