import axios from 'axios';

export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";


export const fetchCharacters = () => (dispatch) => {
    dispatch({type: FETCH_CHARACTERS_START});
    axios.get('https://rickandmortyapi.com/api/character').then(res => {
        
        dispatch( { type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results });
    }).catch(e => console.log(e));
};