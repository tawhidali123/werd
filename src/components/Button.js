import React from 'react'
import '../stylesheets/Button.css'

const Button = (props) => {
    console.log(props)

    return(
        <button className="box" onClick={props} >
            Play
        </button>
    )
}

export default Button 