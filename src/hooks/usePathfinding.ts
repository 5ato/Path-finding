import { useContext } from "react";
import { PathfindingContext } from "../context/PathfindingContext";

export default function usePathfinding() {
    const context = useContext(PathfindingContext)

    if (!context) {
        throw new Error('!!!ABOBA!!!')
    }

    return context
}