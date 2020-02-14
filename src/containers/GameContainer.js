import React from 'react'
import { useSelector } from 'react-redux'
import Question from '../components/Question';
import Choices from '../components/Choices';
// import userActions from '../redux/actions'

export default function GameContainer() {
    // const wordPool = useSelector(state => state.words)
    // const choiceList = useSelector(state => state.choices)

    
    return (
        <div>
            <h1>This is the box for GameContainer</h1>
            <Question />
            <Choices />
        </div>
    )
}
