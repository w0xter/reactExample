import React from 'react'

export default function ListElement(props){
    return(
        <div className="listElement">
            <h3>{props.position + ": " + props.text}</h3>
        </div>
    )
}