import React, { useState } from 'react'

export default function Form1() {
    const [name, setName] = useState("");
    const [email, setEmail]= useState("");
    
    const handlesubmit = (e)=>{
        e.preventDefault();
        const data = {name,email};
        console.log(data);
    };
    

    return (
        <center>
            <div>
                <h1>Registartion Form</h1>
                <form onSubmit={handlesubmit}>
                    <label type="text">Name : </label>
                    <input type="text" placeholder="Enter Your Name" onClick={(e) =>setName(e.target.value)}/>
                    <br/>
                    <label type="email">Email : </label>
                    <input type="email" placeholder="Enter Your Email" onClick={(e)=> setEmail(e.target.value)}/>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        </center>

    )
}
