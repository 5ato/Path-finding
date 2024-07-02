import { ReactNode, createContext, useState } from "react";
import { TileType } from "../utils/types";
import { END_TILE_CONF, START_TILE_CONF } from "../utils/constants";

interface ITileContext {
    startTile: TileType
    setStartTile: (startTile: TileType) => void
    endTile: TileType
    setEndTile: (endTile: TileType) => void
}

export const TileContext = createContext<ITileContext | null>(null)


type TileProviderProps = {
    children: ReactNode
}

export default function TileProvider({ children }: TileProviderProps) {
    const [startTile, setStartTile] = useState<TileType>(START_TILE_CONF)
    const [endTile, setEndTile] = useState<TileType>(END_TILE_CONF)
    return (
        <TileContext.Provider
            value={{
                startTile,
                setStartTile,
                endTile,
                setEndTile
            }}
        >
            {children}
        </TileContext.Provider>
    )
}
