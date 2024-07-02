import { ReactNode, createContext, useState } from "react"
import { AlgorithmType, MazeType, GridType } from "../utils/types"
import createGrid from "../utils/helpers"
import { END_TILE_CONF, START_TILE_CONF } from "../utils/constants"

interface IPathfindingContext {
    algorithm: AlgorithmType,
    setAlgorithm: (algorithm: AlgorithmType) => void
    maze: MazeType
    setMaze: (maze: MazeType) => void
    grid: GridType
    setGrid: (grid: GridType) => void
    isGraphVisualized: boolean
    setIsGraphVisualized: (isGraphVisualized: boolean) => void
}

export const PathfindingContext = createContext<IPathfindingContext | null>(null)

type PathfindingProviderProps = {
    children: ReactNode
}

export default function PathfindingProvider({ children }: PathfindingProviderProps) {
    const [algorithm, setAlgorithm] = useState<AlgorithmType>('DIJKSTRA')
    const [maze, setMaze] = useState<MazeType>('NONE')
    const [grid, setGrid] = useState<GridType>(createGrid(START_TILE_CONF, END_TILE_CONF))
    const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false)
    return (
        <PathfindingContext.Provider 
            value={{
                algorithm,
                setAlgorithm,
                maze,
                setMaze,
                grid,
                setGrid,
                isGraphVisualized,
                setIsGraphVisualized
            }}
        >
            {children}
        </PathfindingContext.Provider>
    )
}
