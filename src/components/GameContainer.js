import React, { Component,useState,useEffect } from 'react'

import Question from './Question';
import Choices from './Choices';



export default function GameContainer() {
    
    const [question, setQuestion] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000//choices`)
        .then(res => res.json())
        .then(resp => {
            console.log(resp)
        })
    }, [])

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

