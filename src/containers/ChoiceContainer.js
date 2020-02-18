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

    const getRandomChoice = (choiceList, choices) => {
        
        let num = choiceList.length

        choiceList.map(choice => {
            let randomChoice = Math.floor(getRandomArbitraryNumber(1, num))
            console.log(randomChoice)
            if (choice.id === randomChoice && choices.length < 5) {
                choices.push(choice)
            }
            console.table(choices)
            return(
                console.log("done")
            )
        })
    }

    const displayChoices = (choiceList) => {
        getRandomChoice(choiceList)
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