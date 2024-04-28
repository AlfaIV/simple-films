import './App.scss';
import MyHeader from '../../components/header/header.js';
import MyFooter from '../../components/footer/footer';
import FilmCard from '../../components/filmCard/filmCard.js';
import Description from '../../components/description/description.js';
import { useDispatch, useSelector } from "react-redux";

const App = () => {

  const dispatch = useDispatch();
  const films = useSelector(state => state.listFilms);
  console.log(films)

  const handlerClick = (e) => {
    const targetClass = e.currentTarget;
    console.log(targetClass);
  }

  return (
    <div className="App">
      <MyHeader />
      {films.map(film =>
        <FilmCard
          id={film.id}
          title={film.title}
          url={film.url}
          rating={film.rating}
          clickHandler={handlerClick}
        />
      )}
      {/* <Description/> */}
      <MyFooter />
    </div>
  );
}

export default App;
