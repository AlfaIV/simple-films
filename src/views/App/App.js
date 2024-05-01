import './App.scss';

import MyHeader from '../../components/header/header.js';
import MyFooter from '../../components/footer/footer';
import {Paginator} from '../../components/paginator/paginator.js'
import FilmCard from '../../components/filmCard/filmCard.js';

import { useDispatch, useSelector } from "react-redux";
import { fetchFilms, actionGetFilms } from '../../store/actions/listFilmsActions.js';
import { useEffect} from 'react';
import { Link } from "react-router-dom";


const App = () => {
  const dispatch = useDispatch();
  const films = useSelector(state => state.listFilms.listOfFilms);
  const currentPage = useSelector(state => state.listFilms.lenOfList);
  console.log("print films");
  console.log(films.map(film => film));
  console.log("print currentPage");
  console.log(currentPage);

  useEffect(() => {
    if (currentPage === 1){
      dispatch(fetchFilms(1));
    }else{
      dispatch(actionGetFilms());
    }
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
