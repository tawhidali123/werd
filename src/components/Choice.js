import React from 'react'

const Choice = (props) => {
    console.log(props)
    return (
        <div>
            {props.prompt.definition}
        </div>
    )
}

export default Choice
