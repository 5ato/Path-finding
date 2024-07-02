import { ChangeEvent } from "react"
import { MazeSelectType } from "../../../utils/types"
import './Select.css'

interface SelectProps {
    value: string
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
    options: MazeSelectType[]
    label: string
    isDisable?: boolean
}

export default function Select({ value, onChange, options, label, isDisable }: SelectProps) {
    return (
        <div className="select__wrapper">
            <label htmlFor={label}>{label}</label>
            <select
                disabled={isDisable}
                id={label}
                value={value}
                onChange={onChange}
            >
                {options.map(option => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}