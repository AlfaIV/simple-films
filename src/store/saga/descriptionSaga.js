import {put, takeEvery, call} from 'redux-saga/effects'
import { filmDescriptionActions } from '../reducers/filmDescriptionReducer.js'
import {apiKey} from '../../secrets/apiKey.js'
import {actionGetDescription} from '../actions/filmDescriptionActions.js'

const fetchFilmData = () => {
    const id = 823464;
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?language=ru-RU&api_key=' + apiKey;
    const options = {
        method: 'GET',
        headers: { 
            accept: 'application/json',
        }
    };
    return fetch(url, options);
}


export function* fetchFilmDataWorker(){
    const response = yield call(fetchFilmData);
    const json = yield call([response, 'json']);
    yield put(actionGetDescription(json));
}

export  function* filmDataWatcher(){
    yield takeEvery(filmDescriptionActions.FETCH_DESCRIPTION, fetchFilmDataWorker);
}
