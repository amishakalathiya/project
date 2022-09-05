import React, { useState } from 'react'
import './assignment3.css'
export default function Assignment3() {
    const initCount = 0
    const [count, setCount] = useState(initCount)
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(initCount)} className="btn">Reset</button>
            <button onClick={() => setCount(count + 1)} className="btn">Increment</button>
            <button onClick={() => setCount(count - 1)} className="btn">Decrement</button>
        </div>
    )
}
