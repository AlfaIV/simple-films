import {filmDescriptionActions} from '../reducers/filmDescriptionReducer.js'
import {apiKey} from '../../secrets/apiKey.js'

//fix it to create action
export const actionGetDescription = (payload) => ({
    type: filmDescriptionActions.GET_DESCRIPTION, payload
})
export const actionGetCollection = (payload) => ({
    type: filmDescriptionActions.GET_COLLECTION, payload
})

export const fetchFilmData = (id) => {
    return (dispatch) => {
        const url = 'https://api.themoviedb.org/3/movie/' + id + '?language=ru-RU&api_key=' + apiKey;
        const options = {
            method: 'GET',
            headers: { 
                accept: 'application/json',
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                dispatch(actionGetDescription(json));
            })
            .catch(err => console.error('error:' + err));
    }
}

export const fetchCollectionData = (id) => {
    return (dispatch) => {
        // 'https://api.themoviedb.org/3/movie/100/recommendations?language=ru-Ru&page=1'
        const url = 'https://api.themoviedb.org/3/movie/' + id + '/recommendations?language=ru-RU&page=1&api_key=' + apiKey;
        const options = {
            method: 'GET',
            headers: { 
                accept: 'application/json',
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                dispatch(actionGetCollection(json));
            })
            .catch(err => console.error('error:' + err));
    }
}
