import { all } from 'redux-saga/effects'
import { filmDataWatcher } from '../saga/descriptionSaga.js'
import { listFilmsWatcher } from '../saga/listFilmsSaga.js'

export function* rootWatcher(){
    yield all([filmDataWatcher(), listFilmsWatcher()]);
}