import React from 'react'
import Question from './Question';
import Choices from './Choices';

export default function GameContainer() {
    return (
        <div>
            <h1>This is the box for GameContainer</h1>
            <Question />
            <Choices />
        </div>
    )
}
