let defaultState = {
    words: [],
    choices: [],
    gameScore: 0,
    wrongAnswer: 0
}

export default function reducer(state = defaultState, action){
    switch(action.type) {
        case 'LOAD_CHOICES' :
        return {
            ...state,
            choices: action.payload
        }
        case 'LOAD_WORDS' :
            return {
                ...state,
                words: action.payload
            }

        case 'INCREMENT_GAME_SCORE':
            return {
                ...state,
                gameScore: state.gameScore + 1
            }
        case 'INCREMENT_WRONG_ANSWER':
            return {
                ...state,
                wrongAnswer: state.wrongAnwer + 1
            }
            

        default:
            return state
    }
}