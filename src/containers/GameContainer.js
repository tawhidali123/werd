import React from 'react'
import { useSelector } from 'react-redux'
import Question from '../components/Question';
import ChoiceContainer from '../containers/ChoiceContainer'

export default function GameContainer() {
    const wordPool = useSelector(state => state.words)
    // const choiceList = useSelector(state => state.choices)
    console.log(wordPool)
    // console.log(choiceList)
    
    const slangTerms = []
    const mappedWords = wordPool.map(word => {
        console.log(word)
        const slang = {
            term: word.attributes.term,
            definition: word.attributes.definition
        }
        return(
            <>
                <div>
                    <Question slang={slang} />
                </div>

                <div>
                    <ChoiceContainer slang={slang} />
                </div>
            </>
        )
    })


    
    return (
        <div>
            {mappedWords}
            {/* <ChoiceContainer/> */}
        </div>
    )
}
