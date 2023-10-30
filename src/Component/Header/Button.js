import React from 'react'
import "../Header/Button.css"

const Button = (props) => {
  return (
    <div className='Button' >
           <h5 style={{color:"black"}}>{props.name}</h5>
    </div>
  )
}

export default Button
