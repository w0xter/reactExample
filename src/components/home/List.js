import React from 'react'
import ListElement from './ListElement'

export default function List(props){
    return(
        <>
        {props.list.map((element, idx) => {
            return(
                <ListElement text={element} position={idx}/>
            )
        })}
        </>
    )
}
