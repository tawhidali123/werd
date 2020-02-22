// Redux Actions
const setWords = words => ({
    type: 'LOAD_WORDS',
    payload: words
  })

const setChoices = choices => ({
    type: 'LOAD_CHOICES',
payload: choices
})

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
    setChoices
}