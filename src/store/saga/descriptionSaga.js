import { put, takeEvery, call } from 'redux-saga/effects'
import { filmDescriptionActions } from '../reducers/filmDescriptionReducer.js'
import { apiKey } from '../../secrets/apiKey.js'
import { actionGetDescription, actionGetCollection } from '../actions/filmDescriptionActions.js'

const fetchFilmData = (id = 823464) => {
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?language=ru-RU&api_key=' + apiKey;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };
    return fetch(url, options);
}


function* fetchFilmDataWorker(action) {
    const response = yield call(fetchFilmData, action.id);
    const json = yield call([response, 'json']);
    yield put(actionGetDescription(json));
}



export const fetchCollectionData = (id) => {
    const url = 'https://api.themoviedb.org/3/movie/' + id + '/recommendations?language=ru-RU&page=1&api_key=' + apiKey;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };
    
    return fetch(url, options);
}

function* fetchCollectionDataWorker(action) {
    const response = yield call(fetchCollectionData, action.id);
    const json = yield call([response, 'json']);
    yield put(actionGetCollection(json));
}


export function* filmDataWatcher() {
    yield takeEvery(filmDescriptionActions.FETCH_DESCRIPTION, fetchFilmDataWorker);
    yield takeEvery(filmDescriptionActions.FETCH_COLLECTION, fetchCollectionDataWorker);
}
