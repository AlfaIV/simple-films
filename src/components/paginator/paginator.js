import './paginator.scss'
import { fetchFilms, actionSetPage } from '../../store/actions/listFilmsActions.js';
import { useDispatch} from "react-redux";
import { useState } from 'react';

export const Paginator = () => {
    
    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState(2);

    const clickHandler = () => {
        setPageNumber(pageNumber + 1);
        dispatch(fetchFilms(pageNumber));
        dispatch(actionSetPage(pageNumber));
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