import { all } from 'redux-saga/effects'
import { filmDataWatcher } from '../saga/descriptionSaga.js'

export function* rootWatcher(){
    yield all([filmDataWatcher()]);
}