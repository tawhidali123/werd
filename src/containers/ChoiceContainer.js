import React from 'react'
import { useSelector } from 'react-redux'
import Choice from '../components/Choice'

const ChoiceContainer = (props) => {
    console.log(props) 
    const answer = props.slang.definition
    console.log(answer)
    const choiceList = useSelector(state => state.choices)
   
    
    console.log(choiceList)
    // let choiceList = [props.choiceList]
    let choices = []
    choices.push(answer)
    // console.log(choiceList)

    const getRandomOptions = (min, max) => {
        let randomOptions = []
        for(let i=0; i < 3; i++){
            randomOptions.push(Math.floor(Math.random() * (max - min) + min).toString())
        }
        return randomOptions
      }

    const getRandomChoices = () => {
        let num = choiceList.length
        console.log(num)
        let randomChoice = getRandomOptions(1,num)
        console.log(randomChoice)
        console.log(choices)
        // let options = []
        for( let i=0; i < num; i++){
            randomChoice.map(randomOption => {
                
                if(choiceList[i].id === randomOption){
                    choices.push(choiceList[i].attributes.definition)
                    
                }
                return choices    
            }
        )
    }
    return choices
}

    // const displayChoices = () => {
    //     getRandomChoices()
    //     console.log(choices)
    //     choices.forEach(entry => {
    //         return(
    //             entry.definition
    //         )
    //     })
    // }

    getRandomChoices()
    console.log(choices)

    const mappedChoices = choices.map(entry => 
        {
            console.log(entry)
                const prompt = {
                definition: entry
            }
        return(
            <>
                <div>
                    <Choice prompt={prompt} />
                </div>
            </>
        )
    })

    return(
        <div>
             {mappedChoices}       
        </div>            
    )

}

export default ChoiceContainer