import React from 'react'

function ListComp(props){
    return <li>Color : {props.color}</li>
}
export default function List() {
    const color = ["purple","pink","orange","yellow","white","black"];
  return (
    <div>
        <h1>List The Color</h1>
        <ul>
            {
                color.map((c)=>
                    <ListComp color={c}/>
                )
            }
        </ul>
    </div>
  )
}
