import { createStore, applyMiddleware } from 'redux';
import { characterReducer } from './reducers/characterReducer.js';
import thunk from 'redux-thunk';

export const store = createStore(characterReducer, applyMiddleware(thunk));