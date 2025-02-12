import React from 'react'

export const Box = (props) => {
    const {list}=props
  return (
    <div style={{backgroundColor:list.student?"green":"red"}}>
        Name : {list.name} <br/>
        age :{list.age}
    </div>
  )
}
