import { useState } from "react"

export default function Counter({ name }) {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    return (
        <div style={{ border: '2px solid yellow' }}>
            <h3>{count}</h3>
            <button onClick={handleClick}>Add</button>
        </div>
    )

}