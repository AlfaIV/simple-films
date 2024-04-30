import {filmDescriptionActions} from '../reducers/filmDescriptionReducer.js'

//fix it to create action
export const actionGetDescription = (payload) => ({
    type: filmDescriptionActions.GET_DESCRIPTION, payload
})

export const fetchFilmData = (id) => {
    return (dispatch) => {
        const url = 'https://api.themoviedb.org/3/movie/' + id + '?language=en-US&api_key=8941f401c6c08993b695a6b2da9136d5';
        const options = {
            method: 'GET',
            headers: { 
                accept: 'application/json',
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                // console.log(json.title);
                dispatch(actionGetDescription(json));
            })
            .catch(err => console.error('error:' + err));
    }
}

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/find/109619?external_source=imdb_id&api_key=8941f401c6c08993b695a6b2da9136d5' \
//      --header 'accept: application/json'
