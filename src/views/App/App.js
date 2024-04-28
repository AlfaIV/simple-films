import './App.scss';
import MyHeader from '../../components/header/header.js';
import MyFooter from '../../components/footer/footer';
import FilmCard from '../../components/filmCard/filmCard.js';
import Description from '../../components/description/description.js';

const App =() => {
  return (
    <div className="App">
      <MyHeader/> 
      <FilmCard/>
      {/* <Description/> */}
      <MyFooter/> 
    </div>
  );
}

export default App;
