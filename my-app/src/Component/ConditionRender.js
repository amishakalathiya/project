import React, { useState } from 'react'

export default function ConditionRender() {
    const [state, isLogedIn] = useState(false)

    return (
        <div>
            {state?<button onClick={()=>isLogedIn(false)}>Login</button>:<button onClick={()=>isLogedIn(true)}>LoginOut</button>}
        </div>
    )
}
