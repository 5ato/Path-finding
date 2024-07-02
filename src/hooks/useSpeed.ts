import { useContext } from "react";
import { SpeedContext } from "../context/SpeedContext";

export default function useSpeed() {
    const context = useContext(SpeedContext)

    if (!context) {
        throw new Error('ABOBA CONTEXT!!!!')
    }
    return context
}