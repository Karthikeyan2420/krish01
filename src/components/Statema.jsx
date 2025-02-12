import React from 'react'
import { useState } from 'react'

export const Statema = () => {
    const [count,setcount]=useState(0)
    const handleadd=()=>
    {
        setcount(count+1)
    }
  return (
    <>
    <button onClick={handleadd}> +</button>
    <b>{count}</b>
    </>
  )
}
