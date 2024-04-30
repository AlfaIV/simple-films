import './App.scss';

import MyHeader from '../../components/header/header.js';
import MyFooter from '../../components/footer/footer';
import {Paginator} from '../../components/paginator/paginator.js'
import FilmCard from '../../components/filmCard/filmCard.js';

import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from '../../store/actions/listFilmsActions.js';
import { useEffect} from 'react';
import { Link } from "react-router-dom";
import { fetchFilmData } from '../../store/actions/filmDescriptionActions.js';


const App = () => {
  const dispatch = useDispatch();
  const films = useSelector(state => state.listFilms);

  useEffect(() => {
    dispatch(fetchFilms(1));
  }, []);

  const handleClick = (e) => {
    const targetID = e.currentTarget.getAttribute('data-section');
  }

  return (
    <div className="app">
      <MyHeader />
      {films.map(film =>
        <Link to={`/film/${film.id}`}>
          <FilmCard
            id={film.id}
            title={film.title}
            url={"https://image.tmdb.org/t/p/w500" + film.poster_path}
            rating={film.vote_average}
            clickHandler={handleClick}
          />
        </Link>
      )}
      <Paginator />
      <MyFooter />
    </div>
  );
}

export default App;
