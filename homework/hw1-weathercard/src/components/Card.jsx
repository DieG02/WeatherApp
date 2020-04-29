import React from 'react';

export default function Card(props) {
  // acá va tu código

  return (
  <div> 
    <button onClick={props.onClose}>x</button>
    <h4>{props.name}</h4>
    <p>Max &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min</p>
    <p>{props.max} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.min}</p>
    <img
        id = "img"
        src = {"http://openweathermap.org/img/wn/" + props.img + "@2x.png"}
        alt = ""
      />
  </div>
  )
};

