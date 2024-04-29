import { listFilmsReducerActionType } from '../reducers/listFilmsReducer.js'

//fix it to create action
export const actionAddFilms = (payload) => ({type: listFilmsReducerActionType.ADD_FILMS, payload})
export const actionGetFilms = (payload) => ({type: listFilmsReducerActionType.GET_FILMS})

// export const fetchFilms = () => {
//     return (dispatch) => {
//         const url = 'https://api.kinopoisk.dev/v1.4/movie/random?notNullFields=name&type=movie';
//         const options = {
//             method: 'GET',
//             headers: { 
//                 accept: 'application/json',
//                 'X-API-KEY': 'JYYX5XH-R1BMR42-QQCMHCF-9RT9ESP',
//             }
//         };

//         fetch(url, options)
//             .then(res => res.json())
//             .then(json => {
//                 // console.log(json);
//                 dispatch(actionAddFilms(json));
//             })
//             .catch(err => console.error('error:' + err));
//     }
// }



export const fetchFilms = () => {
    return (dispatch) => {
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=8941f401c6c08993b695a6b2da9136d5';
        const options = {
            method: 'GET',
            headers: { 
                accept: 'application/json',
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                // console.log(json.results);
                dispatch(actionAddFilms(json.results));
            })
            .catch(err => console.error('error:' + err));
    }
}

// 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=8941f401c6c08993b695a6b2da9136d5'

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=8941f401c6c08993b695a6b2da9136d5' \
//      --header 'accept: application/json'

