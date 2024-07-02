interface IHandleMouse {
    (row: number, col: number): void
}

interface ITileProps {
    row: number
    col: number
    isStart: boolean
    isEnd: boolean,
    isTraversed: boolean,
    isWall: boolean,
    isPath: boolean,
    handleMouseDown: IHandleMouse
    handleMouseEnter: IHandleMouse
    handleMouseUp: IHandleMouse
}

export default function Tile({
    row, col, isStart, isEnd, isTraversed, isWall, isPath, handleMouseDown, handleMouseEnter, handleMouseUp
}: ITileProps ) {
    let tileStyle = 'default-Tile'
    if (isStart) {
        tileStyle += ' tile-start'
    } else if (isEnd) {
        tileStyle += ' tile-end'
    } else if (isWall) {
        tileStyle += ' tile-wall'
    } else if (isTraversed) {
        tileStyle += ' tile-traversed'
    } else if (isPath){
        tileStyle += ' tile-path'
    }

    return (
        <div 
            className={tileStyle} 
            id={`${row}-${col}`}
            onMouseDown={() => handleMouseDown(row, col)}
            onMouseEnter={() => handleMouseEnter(row, col)}
            onMouseUp={() => handleMouseUp(row, col)}
        />
    )
}