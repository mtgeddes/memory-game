import React from "react"
import "./Nav.css"

const Nav = props => 

<nav className="navbar">
    <ul>
        <li className="brand">
            <a href="/">Clicky Game</a>
        </li>
        { props.guessMessage === null
            ? <li> Click an image to begin! </li> 
            : <li> { props.guessMessage 
                ? `You guessed corretly!` 
                : `Sorry, you've already guessed`} 
            </li> 
        }
        <li>Score: {props.counter} | Top Score: {props.max}</li>
    </ul>
</nav>

export default Nav;