let defaultState = {
    words: [],
    choices: [],
    gameScore: 0,
}

export default function reducer(state = defaultState, action){
    switch(action.type) {
        case 'LOAD_WORDS' :
            return {
                ...state,
                words: action.payload
            }
        
        case 'LOAD_CHOICES' :
        return {
            ...state,
            choices: action.payload
        }

        default:
            return state
    }
}