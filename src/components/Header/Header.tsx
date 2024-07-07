import { useState, MutableRefObject } from 'react'
import usePathfinding from '../../hooks/usePathfinding'
import useTile from '../../hooks/useTile'
import { MAZES, PATHFINDING_ALGORITHMS, SPEEDS } from '../../utils/constants'
import { resetGrid } from '../../utils/resetGrid'
import { AlgorithmType, MazeType, SpeedType } from '../../utils/types'
import './Header.css'
import PlayButton from './PlayButton/PlayButton'
import Select from './Select/Select'
import { runMazeAlgorithm } from '../../utils/runMazeAlgorithm'
import useSpeed from '../../hooks/useSpeed'
import runPathFindingAlgorithm from '../../utils/runPathFindingAlgorithm'
import animatePath from '../../utils/animatePath'

export default function Header({ isVisualizationRunningRef }: {isVisualizationRunningRef: MutableRefObject<boolean>}) {
    const [isDisabled, setIsDisabled] = useState(false)
    const {
        maze, 
        setMaze, 
        grid, 
        setGrid, 
        setIsGraphVisualized, 
        isGraphVisualized,
        algorithm, 
        setAlgorithm
    } = usePathfinding()
    const {startTile, endTile} = useTile()
    const {speed, setSpeed} = useSpeed()

    function handleGenerateMaze(maze: MazeType) {
        if (maze === 'NONE') {
            console.log(maze)
            setMaze(maze)
            resetGrid({grid, startTile, endTile})
            return 
        }

        setMaze(maze)
        setIsDisabled(true)
        runMazeAlgorithm({
            maze, grid, startTile, endTile, setIsDisabled, speed
        })
        const newGrid = grid.slice()
        setGrid(newGrid)
        setIsGraphVisualized(false)
    }
    function handleRunVisualizer() {
        if (isGraphVisualized) {
            setIsGraphVisualized(false)
            resetGrid({grid: grid.slice(), startTile, endTile})
            return
        }

        const {traversedTiles, path} = runPathFindingAlgorithm({
            algorithm,
            grid,
            startTile,
            endTile
        })

        animatePath(traversedTiles, path, startTile, endTile, speed)
        setIsDisabled(true)
        isVisualizationRunningRef.current = true
        setTimeout(() => {
            const newGrid = grid.slice()
            setGrid(newGrid)
            setIsGraphVisualized(true)
            setIsDisabled(false)
            isVisualizationRunningRef.current = false
        }, 8 * (traversedTiles.length + 8 * 2) + 30 * (path.length + 60) * SPEEDS.find(s => s.value === speed)!.value)
    }
    return (
        <header className='header'>
            <div className="nav">
                <h1>Визаулизация нахождения пути</h1>
                <div className='main__wrapper__selects'>
                    <Select 
                        label='Пазл' 
                        value={maze} 
                        options={MAZES} 
                        onChange={(e) => {
                            handleGenerateMaze(e.target.value as MazeType)
                        }}
                    />
                    <Select 
                        label='Граф' 
                        value={algorithm} 
                        options={PATHFINDING_ALGORITHMS} 
                        onChange={(e) => {
                            setAlgorithm(e.target.value as AlgorithmType)
                        }}
                    />
                    <Select
                        label='Скорость'
                        value={speed}
                        options={SPEEDS}
                        onChange={(e) => {
                            setSpeed(parseInt(e.target.value) as SpeedType)
                        }}
                    />
                    <PlayButton
                        isDisable={isDisabled}
                        isGraphVisualized={isGraphVisualized}
                        handleRunVisualizer={handleRunVisualizer}
                    />
                </div>
            </div>
        </header>
    )
}