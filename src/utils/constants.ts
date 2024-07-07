import { AlgorithmSelectType, MazeSelectType, SpeedSelectType, TileType } from "./types"

export const MAX_ROW = 39
export const MAX_COLUMN = 39

export const START_TILE_CONF: TileType = {
    row: 1,
    col: 1,
    isEnd: false,
    isWall: false,
    isPath: false,
    distance: 0,
    isTraversed: false,
    isStart: true,
    parent: undefined
}

export const END_TILE_CONF: TileType = {
    row: MAX_ROW-2,
    col: MAX_COLUMN-2,
    isEnd: true,
    isWall: false,
    isPath: false,
    distance: 0,
    isTraversed: false,
    isStart: false,
    parent: undefined
}

export const MAZES: MazeSelectType[] = [
    {value: 'NONE', name: 'Без пазла'},
    {value: 'BINARY_TREE', name: 'Бинарное дерево'},
    {value: 'RECURSIVE DIVISION', name: 'Рекурсивное деление'},
]

export const SPEEDS: SpeedSelectType[] = [
    {name: 'Медленно', value: 2},
    {name: 'Нормально', value: 1},
    {name: 'Быстро', value: 0.5},
]

export const PATHFINDING_ALGORITHMS: AlgorithmSelectType[] = [
    {value: 'DIJKSTRA', name: 'Декстра'},
    {value: 'BFS', name: 'Обход в ширину'},
    {value: 'DFS', name: 'Обход в глубину'}
]
