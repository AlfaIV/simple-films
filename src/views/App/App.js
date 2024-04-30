import './App.scss';
import MyHeader from '../../components/header/header.js';
import MyFooter from '../../components/footer/footer';
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
    dispatch(fetchFilms());
  }, [dispatch]);

  const handleClick = (e) => {
    const targetID = e.currentTarget.getAttribute('data-section');
    dispatch(fetchFilmData(targetID));
    console.log(targetID);
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
      {/* <Description /> */}
      <MyFooter />
    </div>
  );
}

export default App;
