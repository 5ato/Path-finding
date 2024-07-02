import { useState } from 'react'
import usePathfinding from '../../hooks/usePathfinding'
import useTile from '../../hooks/useTile'
import { MAZES } from '../../utils/constants'
import { resetGrid } from '../../utils/resetGrid'
import { MazeType } from '../../utils/types'
import './Header.css'
import PlayButton from './PlayButton/PlayButton'
import Select from './Select/Select'
import { runMazeAlgorithm } from '../../utils/runMazeAlgorithm'
import useSpeed from '../../hooks/useSpeed'

export default function Header() {
    const [isDisabled, setIsDisabled] = useState(false)
    const {maze, setMaze, grid, setGrid, setIsGraphVisualized} = usePathfinding()
    const {startTile, endTile} = useTile()
    const {speed} = useSpeed()

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
                    {/* <PlayButton/> */}
                </div>
            </div>
        </header>
    )
}