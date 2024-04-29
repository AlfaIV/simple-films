import './App.scss';
import MyHeader from '../../components/header/header.js';
import MyFooter from '../../components/footer/footer';
import FilmCard from '../../components/filmCard/filmCard.js';
import Description from '../../components/description/description.js';
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms, actionAddFilms } from '../../store/actions/listFilmsActions.js';
import { useEffect, useLayoutEffect } from 'react';


const App = () => {
  const dispatch = useDispatch();
  const films = useSelector(state => state.listFilms);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  const handleClick = (e) => {
    const targetID = e.currentTarget.getAttribute('data-section');
    console.log(targetID);
  }

  return (
    <div className="App">
      <MyHeader />
      {films.map(film =>
        <FilmCard
          id={film.id}
          title={film.title}
          url={"https://image.tmdb.org/t/p/w500"+ film.poster_path}
          rating={film.vote_average}
          clickHandler={handleClick}
        />
      )}
      {/* <Description /> */}
      <MyFooter />
    </div>
  );
}

export default App;
