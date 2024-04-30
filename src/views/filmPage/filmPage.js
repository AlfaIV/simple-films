import './filmPage.scss'
import Description from '../../components/description/description';
import MyHeader from '../../components/header/header.js';
import MyFooter from '../../components/footer/footer';

import { useDispatch, useSelector } from "react-redux";
import { fetchFilmData } from '../../store/actions/filmDescriptionActions.js';
import { useEffect} from 'react';
import { useLocation } from 'react-router-dom';


const FilmPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFilmData(currentPath.split('/')[2]));
    }, []);



    const film = useSelector(state => state.description);
    const location = useLocation();
    const currentPath = location.pathname;;
    
    const handlerClick = (e) => {
        const targetClass = e.currentTarget;   
        // console.log(targetClass);
    }


    console.log(film[0]);

    return(
        <div className='film-page'>
            <MyHeader/>
            <Description
                title={film.length > 0 ? film[0].title :"Не загрузилось имя фильма"}
                date = {film.length > 0 ? film[0].release_date :"Не загрузилось дата выпуска фильма"}
                country = {film.length > 0 ? film[0].production_countries[0].name :"Не загрузилось страна, выпустившая фильм"}
                mark = {film.length > 0 ? film[0].vote_average :"Не загрузился рейтинг фильма"}
                mark_number = {10}
                infoText = {film.length > 0 ? film[0].overview :"Не загрузилось описание фильма"}
                url = {film.length > 0 ? `https://image.tmdb.org/t/p/w500/${film[0].poster_path}`: ''}
                genres = {film.length > 0 ? film[0].genres.map(genre => genre.name + ' '): 'Жанры не загрузились'}
                duration = {film.length > 0 ? film[0].runtime + ' мин' : 'Длительность не загрузились'}
            />
            <MyFooter/>
        </div>
    )
}

export default FilmPage;