import React from 'react'
import { Intro } from './Intro'
import { Box } from './Box'

export const Main = (props) => {
  
  const {data}=props
  return (
    <main>
        
     {/*    <Intro name={props.brand}/> */}
        
    {
      data.map((list)=>(<Box list={list}></Box>))
    }
    </main>
  )
}
