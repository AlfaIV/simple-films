import './paginator.scss'
import { fetchFilms, actionSetPage, fetchPage } from '../../store/actions/listFilmsActions.js';
import { useDispatch, useSelector} from "react-redux";
import { useState } from 'react';

export const Paginator = () => {
    
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.listFilms.lenOfList);

    const clickHandler = () => {
        let pageNumber = currentPage + 1;
        dispatch(fetchPage(pageNumber));
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