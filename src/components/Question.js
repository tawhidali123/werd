import React from 'react'
import ChoiceContainer from '../containers/ChoiceContainer'

const Question = (props) => {
    const prompt = props.slang.term 
    const answer = props.slang.definition 

export default function Question() {

    return (
        <div>
            <h1 style={{
                color: '#C4BBB8',
                
                
                
            }}>What is ... Question?</h1>
        </div>
    )
}

}
