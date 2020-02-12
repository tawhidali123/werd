import React, { Component } from 'react'
import Question from './Question';
import Choices from './Choices';



export default class GameContainer extends Component {
    render() {
        return (
            <div style={{
                color: '#C4BBB8',
                padding: '70vh',
                paddingTop: '10vh',
                backgroundColor: 'white'
            }}>
                <Question />
                <Choices />
            </div>
        )
    }
}

