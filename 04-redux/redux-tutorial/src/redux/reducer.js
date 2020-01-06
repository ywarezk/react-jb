

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns next state
 */
export default function helloReducer(state = {message: 'initial message'}, action) {
    switch(action.type) {
        case 'SET MESSAGE':
            // how the state should change according to this action
            return {...state, message: action.payload};
        default:
            return state;
    }
}