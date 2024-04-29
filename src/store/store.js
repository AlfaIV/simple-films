import { createStore, combineReducers, applyMiddleware } from 'redux';
import { filmDescriptionReducer } from './reducers/filmDescriptionReducer';
import { listFilmsReducer } from './reducers/listFilmsReducer';
import { thunk } from 'redux-thunk';

const rootReducers = combineReducers({
    description: filmDescriptionReducer,
    listFilms: listFilmsReducer, 
});


export const store = createStore(rootReducers, applyMiddleware(thunk));