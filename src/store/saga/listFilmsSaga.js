import { put, takeEvery, call } from 'redux-saga/effects'
import { listFilmsReducerActionType } from '../reducers/listFilmsReducer.js'
import { apiKey } from '../../secrets/apiKey.js'
import { actionAddFilms } from '../actions/listFilmsActions.js'


export const fetchFilms = (pageNumber = 1) => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ru-RU&page=' + pageNumber + '&sort_by=popularity.desc&api_key=' + apiKey;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };

    return fetch(url, options);
}

function* fetchListFilmsWorker(action) {
    const response = yield call(fetchFilms, action.pageNumber);
    // yield console.log("action.pageNumber");
    // yield console.log(action.pageNumber);
    // yield console.log("response");
    // yield console.log(response);
    const json = yield call([response, 'json']);
    // yield console.log("json");
    // yield console.log(json);
    yield put(actionAddFilms(json.results));
}


export function* listFilmsWatcher() {
    yield takeEvery(listFilmsReducerActionType.FETCH_FILMS, fetchListFilmsWorker);
}
