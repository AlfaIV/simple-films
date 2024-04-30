import './filmPage.scss'
import Description from '../../components/description/description';
import MyHeader from '../../components/header/header.js';
import MyFooter from '../../components/footer/footer';
import FilmCard from '../../components/filmCard/filmCard.js'

import { useDispatch, useSelector } from "react-redux";
import { fetchFilmData, fetchCollectionData } from '../../store/actions/filmDescriptionActions.js';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';


const FilmPage = () => {
    const location = useLocation();
    const currentPath = location.pathname;;

    const dispatch = useDispatch();
    useEffect(() => {
        const filmID = currentPath.split('/')[2];
        dispatch(fetchFilmData(filmID));
        dispatch(fetchCollectionData(filmID));
    }, []);



    const film = useSelector(state => state.description.description);
    const collection = useSelector(state => state.description.collection);

    console.log(collection);
    // console.log(film);   


    const handlerClick = (e) => {
        const targetClass = e.currentTarget;
        // console.log(targetClass);
    }



    return (
        <div className='film-page'>
            <MyHeader />
            <Description
                title={film.length > 0 ? film[0].title : "Не загрузилось имя фильма"}
                date={film.length > 0 ? film[0].release_date : "Не загрузилось дата выпуска фильма"}
                country={film.length > 0 ? film[0].production_countries[0].name : "Не загрузилось страна, выпустившая фильм"}
                mark={film.length > 0 ? film[0].vote_average : "Не загрузился рейтинг фильма"}
                mark_number={10}
                infoText={film.length > 0 ? film[0].overview : "Не загрузилось описание фильма"}
                url={film.length > 0 ? `https://image.tmdb.org/t/p/w500/${film[0].poster_path}` : ''}
                genres={film.length > 0 ? film[0].genres.map(genre => genre.name + ' ') : 'Жанры не загрузились'}
                duration={film.length > 0 ? film[0].runtime + ' мин' : 'Длительность не загрузились'}
            />
            <h1 className='collection-name'>Похожие фильмы</h1>
            <div className='collection'>
                {collection.length != 0 ? collection[0].results.slice(0, 5).map(
                    (film) =>
                        <Link to={`/film/${film.id}`}>
                            <FilmCard
                                id={film.id}
                                title={film.title}
                                url={"https://image.tmdb.org/t/p/w500" + film.poster_path}
                                rating={film.vote_average}
                                clickHandler={handlerClick}
                            />
                        </Link>
                ) : 'Ничего не загрузилось(('}

            </div>
            <MyFooter />
        </div>
    )
}

export default FilmPage;