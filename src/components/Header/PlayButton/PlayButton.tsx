import { MouseEventHandler } from 'react'
import './PlayButton.css'

interface PlayButtonProps {
    handleRunVisualizer: MouseEventHandler<HTMLButtonElement>
    isDisable: boolean,
    isGraphVisualized: boolean
}

export default function PlayButton({ handleRunVisualizer, isDisable, isGraphVisualized }: PlayButtonProps) {
    return (
        <div className="button__wrapper">
            <button
                disabled={isDisable}
                onClick={handleRunVisualizer}
            >
                {isGraphVisualized ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="#626a65" stroke-width="2" d="M20 8c-1.403-2.96-4.463-5-8-5a9 9 0 1 0 0 18a9 9 0 0 0 9-9m0-9v6h-6"/></svg>:
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 100 100"><path fill="#F1EDF6" d="M76.982 50c0-.847-.474-1.575-1.167-1.957L26.541 19.595a2.23 2.23 0 0 0-1.279-.404a2.244 2.244 0 0 0-2.244 2.243c0 .087.016.169.026.253h-.026v57.131h.026a2.235 2.235 0 0 0 2.218 1.99a2.22 2.22 0 0 0 1.117-.308l.02.035L75.875 51.97l-.02-.035A2.233 2.233 0 0 0 76.982 50"/></svg>
                }
            </button>
        </div>
    )
}