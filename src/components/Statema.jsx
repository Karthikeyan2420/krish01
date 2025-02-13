import React from 'react'
import { useState } from 'react'

export const Statema = () => {
    const [count,setcount]=useState(0)
    const [name , setname]=useState("")
    const handleadd=()=>
    {
        setcount(count+1)
    }
  return (
    <>
    <button onClick={handleadd}> +</button>
    <b>{count}</b>

    <div>{name}</div>
    <input type="text" name="" id="" onChange={(e)=>{setname(e.target.value)}} />
    </>
  )
}
