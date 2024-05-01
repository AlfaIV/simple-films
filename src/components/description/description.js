import './description.scss'

const Description = ({ date, country, mark, mark_number, infoText, url, title, genres, duration }) => {

    const changeMarkColor = (mark, mark_number) =>{
        if (mark > (2/3*mark_number)){
            return "green"
        }else if (mark > (1/3*mark_number)){
            return "orange"
        }else{
            return "red"
        }
    }

    return (
        <div className='film-description'>
            <p class='film-description__name'>{title}</p>
            <img
                className='film-description__poster'
                src={url}
            />
            <div class='film-description__text'>{infoText}</div>
            <table class='film-description__info'>
                <td class='film-description__info__name'>
                    <tr>Оценка:</tr>
                    <tr>Год релиза:</tr>
                    <tr>Длительность:</tr>
                    <tr>Страна:</tr>
                    <tr>Жанры:</tr>
                </td>
                <td class='film-description__info__param'>
                    <tr style={{color: changeMarkColor(mark, mark_number)}}>{mark}</tr>
                    <tr>{date}</tr>
                    <tr>{duration}</tr>
                    <tr>{country}</tr>
                    <tr>{genres}</tr>
                </td>
            </table>
        </div>
        // <div class='film-block'>
        // <div class='slider-equal'>
        //     <div class='film-selection__header'>
        //     <div class='film-selection__header__yellow'></div>
        //     <div class='film-selection_name'>Похожие фильмы</div>
        //     </div>
        //     <div class='slider'>
        //     <img src='/icons/back.png' class='line-prev' />
        //     <div class='slider-container'></div>
        //     <img src='/icons/next.png' class='line-next' />
        //     </div>
    )
}

export default Description;

