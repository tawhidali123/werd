import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Question from '../components/Question';
import ChoiceContainer from '../containers/ChoiceContainer'

export default function GameContainer() {
    const wordPool = useSelector(state => state.words)
    console.log(wordPool)

    const getRandomWord = (min, max, wordPool) => {
        let randomWordIndex = Math.floor(Math.random() * (max - min) + min).toString()

        wordPool.map(word => {
            if (word.id === randomWordIndex){
                const slang = {
                    term: word.attributes.term,
                    definition: word.attributes.definition
                }
                
                debugger
                return(
                    <>
                        <Question slang={slang} />
                    </>
                )
            }
        
        })
      }

      const startGame = (wordPool) => {
          console.log(wordPool.length)
          getRandomWord(1, wordPool.length, wordPool)
      }
    

    // const mappedWords = wordPool.map(word => {
    //     console.log(word)
    //     const slang = {
    //         term: word.attributes.term,
    //         definition: word.attributes.definition
    //     }

        

        // return(
        //     <>
        //         <div>
        //             <Question slang={slang} />
        //         </div>
        //     </>
        // )
    // })


    
    return (
        <>
            {startGame(wordPool)}
        </>
    )
}
