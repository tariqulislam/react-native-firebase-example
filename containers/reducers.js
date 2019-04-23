import {WELCOME_MSG_REACT_NATIVE, CREATE_AUTHOR_CONFIRM} from './actions'
let initialState = {
    welcomeMsg: null,
    isCreated: false,
    message: ''
}

export const firebaseExamples = (state= initialState, action) => {
    switch(action.type) {
    case WELCOME_MSG_REACT_NATIVE:
        return {
            ...state,
            welcomeMsg: action.payload
        }
    case CREATE_AUTHOR_CONFIRM:
        return {
            ...state,
            isCreated: action.payload.isCreated,
            message: action.payload.message
        }
    default:
        return state;
    }
}