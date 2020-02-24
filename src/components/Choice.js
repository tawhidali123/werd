import React from 'react'

export default function Choice(props) {
    console.log(props)
    return (
        <div>
            {props.option.attributes.definition}
            hello
        </div>
    )
}
