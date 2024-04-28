import "./filmCard.scss"

const FilmCard = ({id, title, url, rating, clickHandler}) => {
    
    return (
        <div
            className='film-selection__film'
            data-section={id}
            draggable='true'
            onClick={clickHandler}
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
