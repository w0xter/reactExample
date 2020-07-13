import React from 'react'
import List from '../components/home/List'

export default function Home(){
    const data = [
        "Todo 1",
        "Second Task",
        "Third Task, not relevant"
    ]
    return(
        <>
            <h1>Simple ToDo List</h1>
            <List list={data}></List>
        </>
    )
}