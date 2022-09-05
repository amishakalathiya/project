import React, { useState } from 'react'

export default function UseState() {
  const [Count,setCount] = useState(0)
  const [name,setName] = useState("Amisha")
  const handleState = () => {
    setName("Yashvi")
  }
    
  return (
    <div>
        <h1>Name : {name}</h1>
        <h1>Count : {Count}</h1>
        <button onClick={(e)=>setCount(Count+1)}>Increment</button>
        <button onClick={(e)=>setCount(Count-1)}>Decrement</button>
    </div>
  )
}
