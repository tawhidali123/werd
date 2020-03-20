import React from 'react'

const Choice = (props) => {
    console.log(props)
    return (
        <button>
            {props.prompt.definition}
        </button>
    )
}

export default Choice
