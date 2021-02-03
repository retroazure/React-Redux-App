import { FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS } from '../actions/actions.js';

export const initialState = {
    characters: [],
    isLoading: false, 
    error: "" 
}

export const characterReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CHARACTERS_START:
            return{
                ...state,
                isLoading: true //or !state.isLoading
            }
        case FETCH_CHARACTERS_SUCCESS:
            console.log(action.payload);
            return{
                ...state,
                isLoading: false,
                characters: action.payload
            }

        default: 
        return state;
    }
}