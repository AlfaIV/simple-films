import './App.scss';
import MyHeader from '../../components/header/header.js';
import MyFooter from '../../components/footer/footer';
import FilmCard from '../../components/filmCard/filmCard.js';

const App =() => {
  return (
    <div className="App">
      <MyHeader/> 
      <FilmCard/>
      <MyFooter/> 
    </div>
  );
}

export default App;
