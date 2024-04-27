import "./filmCard.scss"

const FilmCard = () => {
    const title = "21314";
    const id = "123421";
    const url = "https://kinchikoff.ru/wp-content/uploads/2023/06/neuderzhimye-2-2012.jpg"
    const rating = 10;

    return (
        <div
            className='film-selection__film'
            data-section={id}
            draggable='true'
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
