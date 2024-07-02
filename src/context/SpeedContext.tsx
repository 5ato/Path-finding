import { ReactNode, createContext, useState } from "react";
import { SpeedType } from "../utils/types";

interface ISpeedContext {
    speed: SpeedType
    setSpeed: (speed: SpeedType) => void
}

export const SpeedContext = createContext<ISpeedContext | null>(null)

type SpeedProviderProps = {
    children: ReactNode
}

export default function SpeedProvider({ children }: SpeedProviderProps) {
    const [speed, setSpeed] = useState<SpeedType>(0.5)

    return (
        <SpeedContext.Provider 
            value={{
                speed, setSpeed
            }}
        >
            {children}
        </SpeedContext.Provider>
    )
}
