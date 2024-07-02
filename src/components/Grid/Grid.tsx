import { MutableRefObject, useState } from "react";
import usePathfinding from "../../hooks/usePathfinding";
import { checkIsStartOrEnd, createNewGrid } from "../../utils/helpers";
import Tile from "../Tile/Tile";
import './Grid.css'

export default function Grid({ isVisualizationRunningRef }: {isVisualizationRunningRef: MutableRefObject<boolean>}) {
    const {grid, setGrid } = usePathfinding()
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false)

    function handleMouseDown(row: number, col: number) {
        if (isVisualizationRunningRef.current || checkIsStartOrEnd(row, col)) return
        setIsMouseDown(true)
        const newGrid = createNewGrid(grid, row, col)
        setGrid(newGrid)
    }
    function handleMouseUp(row: number, col: number) {
        if (isVisualizationRunningRef.current || checkIsStartOrEnd(row, col)) return
        setIsMouseDown(false)
    }
    function handleMouseEnter(row: number, col: number) {
        if (isVisualizationRunningRef.current || checkIsStartOrEnd(row, col)) return
        if (isMouseDown) {
            const newGrid = createNewGrid(grid, row, col)
            setGrid(newGrid)
        }
    }

    return (
        <div className="grid">
            {grid.map((rowTile, rowIndex) => {
                return (
                    <div key={rowIndex} className="row">
                        {rowTile.map((tile, tileIndex)=> {
                            const {row, col, isEnd, isStart, isPath, isWall, isTraversed} = tile
                            return (
                                <Tile
                                    key={tileIndex}
                                    isEnd={isEnd}
                                    isStart={isStart}
                                    isPath={isPath}
                                    isWall={isWall}
                                    isTraversed={isTraversed}
                                    row={row}
                                    col={col}
                                    handleMouseDown={handleMouseDown}
                                    handleMouseEnter={handleMouseEnter}
                                    handleMouseUp={handleMouseUp}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}