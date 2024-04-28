import "./filmCard.scss"
import { useDispatch, useSelector } from "react-redux";

const FilmCard = () => {
    const dispatch = useDispatch();
    const film = useSelector(state => state.listFilms[0]);
    console.log(film)
    const {id, title, url, rating} = film;
    
    const handlerClick = (e) => {
        const targetClass = e.currentTarget;
        switch (targetClass) {
            case '1':
                break;
            case '2':
                break;
            case '3':
                break;
            default:
                console.log(targetClass);
        }
    }

    return (
        <div
            className='film-selection__film'
            data-section={id}
            draggable='true'
            onClick={handlerClick}
        >
            <div
                className='film-selection__film-poster'
                style={{backgroundImage: `url(${url})`}}
            >
                <div className='film-selection__film_header'>
                    <div className='film-rating'>
                        {rating}
                    </div>
                </div>
            </div>
            <div className='film-selection__film-information'>
                <div className='film-selection__film_name'>
                    { title }
                </div>
            </div>
        </div>
    )
}

export default FilmCard;
