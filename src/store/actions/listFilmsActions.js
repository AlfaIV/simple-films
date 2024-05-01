import { listFilmsReducerActionType } from '../reducers/listFilmsReducer.js'
import { apiKey } from '../../secrets/apiKey.js'

//fix it to create action
export const actionAddFilms = (payload) => ({type: listFilmsReducerActionType.ADD_FILMS, payload})
export const actionGetFilms = () => ({type: listFilmsReducerActionType.GET_FILMS})
export const actionSetPage = (payload) => ({type: listFilmsReducerActionType.SET_PAGE, payload})


export const fetchFilms = (pageNumber = 1) => {
    return (dispatch) => {
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ru-RU&page=' + pageNumber + '&sort_by=popularity.desc&api_key=' + apiKey;
        const options = {
            method: 'GET',
            headers: { 
                accept: 'application/json',
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                dispatch(actionAddFilms(json.results));
            })
            .catch(err => console.error('error:' + err));
    }
}

