// Redux Actions
const setWords = words => ({
    type: 'LOAD_WORDS',
    payload: words
  })

const setChoices = choices => ({
    type: 'LOAD_CHOICES',
    payload: choices
})

const incrementGameScore = () => {
    return {
      type: 'INCREMENT_GAME_SCORE',
    }
  }

const incrementWrongAnswer = () => {
return {
    type: 'INCREMENT_WRONG_ANSWER',
    }
}

// Fetches

const getWords = () => dispatch => {
    fetch("http://localhost:3000/slangs")
    .then(res => res.json())
    .then((response) => {
      console.log(response)
      dispatch(setWords(response.data))
    })
}

const getChoices = () => dispatch => {
    fetch("http://localhost:3000/choices")
    .then(res => res.json())
    .then((response) => {
        console.log(response)
        dispatch(setChoices(response.data))
    })
}

export default {
    getWords,
    getChoices,
    setWords,
    setChoices,
    incrementGameScore,
    incrementWrongAnswer
}