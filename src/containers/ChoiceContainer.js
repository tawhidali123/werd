import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Choice from '../components/Choice'
import userActions from '../redux/actions'

const ChoiceContainer = (props) => {
    // define dispatch
    const dispatch = useDispatch()

    // defining answer
    console.log(props) 
    const answer = props.answer
    console.log(answer)

    // get choiceList from state
    const choiceList = useSelector(state => state.choices)
    console.log(choiceList)

    // prepopulate choice array with right answer
    let choices = []
    choices.push(answer)

    // answer form state management
    const [answerForm, setAnswerForm] = useState({
        selectedAnswer: null,
        correctAnswer: answer
    })

    const { selectedAnswer, correctAnswer } = answerForm

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

        // controlled form functions

        const checkAnswer = (selectedAnswer, correctAnswer) => { 
              if (selectedAnswer === correctAnswer) {
                dispatch(userActions.incrementGameScore())
              }
              else{
                  dispatch(userActions.incrementWrongAnswer())
              }

            }
            

    const handleSubmit = e => {
        e.preventDefault()
        checkAnswer()
    }

    const handleChange = e => {
        setAnswerForm(
            { 
                selectedAnswer: e.target.value 
            }
        )
    }

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