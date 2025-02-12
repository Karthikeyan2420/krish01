import React from 'react'

export const Header = (props) => {

  return (
    <header className={props.theme}>
    <h1>{props.name.toUpperCase()}</h1>

    <nav>
        <ul>
            <li>home</li>
            <li>about</li>
            <li>data</li>
        </ul>
    </nav>
    
    </header>
  )
}
