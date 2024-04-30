import './paginator.scss'
import { fetchFilms } from '../../store/actions/listFilmsActions.js';
import { useDispatch} from "react-redux";

export const Paginator = () => {
    
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(fetchFilms());
    }

    return (
        <div
            className='paginator'
            onClick={clickHandler}
        >
            <p>Еще фильмов!!!!</p>
        </div>
    )
}