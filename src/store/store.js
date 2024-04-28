import { createStore, combineReducers } from 'redux';
import { filmDescriptionReducer } from './reducers/filmDescriptionReducer';
import { listFilmsReducer } from './reducers/listFilmsReducer';

const rootReducers = combineReducers({
    description: filmDescriptionReducer,
    listFilms: listFilmsReducer, 
});


export const store = createStore(rootReducers);