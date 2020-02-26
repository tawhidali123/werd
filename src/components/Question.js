import React from 'react'
import ChoiceContainer from '../containers/ChoiceContainer'

const Question = (props) => {
    const prompt = props.slang.term 
    // const answer = props.slang.definition 

    return (
        <>
            <div>
                 <h1> {prompt} </h1>
                 
            </div>

            <div>
                {/* <ChoiceContainer answer={answer}/> */}
                {/* hello */}
            </div>
        </>
    )
}

export default Question
