import React from 'react'
import { useSelector } from 'react-redux'
import Question from '../components/Question';

export default function GameContainer() {
    const wordPool = useSelector(state => state.words)
    
    console.log(wordPool)
    
    const slangTerms = []
    const mappedWords = wordPool.map(word => {
        const slang = {
            term: word.attributes.term,
            definition: word.attributes.definition
        }
        return(
            <div>
                <Question slang={slang} />
            </div>
        )
    })


    
    return (
        <div>
            {mappedWords}
        </div>
    )
}
