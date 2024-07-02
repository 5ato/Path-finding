export type AlgorithmType = 'DIJKSTRA' | 'BFS' | 'DFS'

export type MazeType = 'NONE' | 'BINARY_TREE' | 'RECURSIVE DIVISION'
export type MazeNameType = 'Без пазла' | 'Бинарное дерево' | 'Рекурсивное деление'

export type MazeSelectType = {
    value: MazeType
    name: MazeNameType
}

export type TileType = {
    row: number
    col: number
    isStart: boolean
    isWall: boolean
    isPath: boolean
    distance: number
    isTraversed: boolean
    isEnd: boolean
    parent: TileType | undefined
}

export type GridType = TileType[][]

export type SpeedType = 2 | 1 | 0.5
export type SpeedNameType = 'Быстро' | 'Нормально' | 'Медленно'
export type SpeedSelectType = {
    name: SpeedNameType,
    value: SpeedType
}

