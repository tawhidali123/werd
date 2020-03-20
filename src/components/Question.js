import React from 'react'
import ChoiceContainer from '../containers/ChoiceContainer'
import SlangContainer from '../containers/SlangContainer'

const Question = (props) => {
    
    return (
        <>
            <div>
                 <SlangContainer slang={props.slang.term} />
            </div>

            <div>
                <ChoiceContainer answer={props.slang.definition}/>
            </div>
        </>
    )
}

export default Question
