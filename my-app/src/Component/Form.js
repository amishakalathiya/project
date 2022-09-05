import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail]= useState("");
    const handleClick = ()=>{
        const data = {name,email}
        console.log (data)
    }
  return (
    <center>
        <div>
            <h1>Form</h1>
            <input type="text" placeholder="enter name" onChange={(e) => setName(e.target.value)}></input>
            <input type="email" placeholder="enter email" onChange={(e) => setEmail(e.target.value)}></input>
            <button onClick={()=>handleClick()}>Save</button>
        </div>
    </center>
  )
}
