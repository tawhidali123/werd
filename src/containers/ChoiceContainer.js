import React from 'react'
import { useSelector } from 'react-redux'
import Choice from '../components/Choice'

const ChoiceContainer = (props) => {
    const choiceList = useSelector(state => state.choices)
    let choices = [props.answer]
    console.log(choiceList)

    const getRandomArbitraryNumber = (min, max) => {
        return Math.random() * (max - min) + min;
      }

    const getRandomChoice = (choiceList) => {
        
        
        let num = choiceList.length
        let options = []
        choiceList.map(choice => {
            let randomChoice = Math.floor(getRandomArbitraryNumber(1, num)).toString()
            if (choice.id === randomChoice) {
                options.push(choice)
            }
            console.log(options)
            
            return(
                options
            )
        })
    }

    const displayChoices = (choiceList) => {
        debugger
        let choices = getRandomChoice(choiceList)
        console.log(choices)
        choices.map(entry => {
            return(
                <Choice option={entry} />
            )
        })
    }

    return(
        <ul>
            {displayChoices(choiceList)}
        </ul>
    )

}

export default ChoiceContainer