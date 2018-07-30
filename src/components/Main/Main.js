import React from "react";
import "./Main.css";

const Main = props => (

<div className= 
    {props.guessMessage === null || true
      ? "click-item shake"
      : "click-item " 
    } 
    role="img" aria-label="click item" onClick={() => props.game(props.id)} >
  <img className="img-thumbnail" src={props.image} alt={props.name}/>

</div>

);

export default Main;
