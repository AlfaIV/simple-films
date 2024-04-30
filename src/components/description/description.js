import './description.scss'

const Description = ({date, country, mark, mark_number, infoText, url, title}) => {
    return (
        <div class='film-page'>
            <div class='film-page__theme'>
                <div class='film-page__theme__content-block'>
                    <div class='column'>
                        <div class='film-name'>{title}</div>
                        <div class='content-card'>

                            <div class='param-list__left'>
                                <div class='param-list__left__row1'>Год релиза</div>
                                <div class='param-list__left__row2'>Страна</div>
                                <div class='param-list__left__row3'>Жанры</div>
                            </div>
                            <div class='param-list__right'>
                                <div class='param-list__right__date'>{date}</div>
                                <div class='param-list__right__country'>{country}</div>
                                <section class='param-list__right__row-genre'></section>
                            </div>
                        </div>
                    </div>
                    <div class='player'>
                        <div class='video-content'>
                            <div class='video-content__watchlist'>
                            </div>
                            <div
                                class='video-content-image'
                                style={{backgroundImage: `url(${url})`}}
                            > </div>
                        </div>

                        <div class='rating'>
                            <div class='left'>
                                <div class='number'>{mark}</div>
                            </div>
                        </div>
                    </div>
                    <div class='film-info'>{infoText}</div>
                    <div class='actors'>
                        <div class='actors-header'>Актёры</div>
                        <div class='actors-list'>
                            {/* {{#each actors}}
                <div class='actor table__actor__text' data-section='{{actor_id}}'>
                <img
                    class='actor-poster'
                    style='background-image: url("{{actor_photo}}")'
                />
                <div class='actor-name'>{{actor_name}}</div>
                </div>
            {{/each}} */}
                        </div>
                    </div>
                </div>
            </div>
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

