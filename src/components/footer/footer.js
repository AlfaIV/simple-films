import './footer.scss'
import gitIcon from '../../assets/img/github-icon.svg';
import tmbdIcon from '../../assets/img/tmdb2.svg'

const MyFooter = () => {
    return (
        <div className='footer'>
            <div className='footer__left-text'>2024</div>
            <a
                className='footer__center-credits'
                href='https://developer.themoviedb.org'
            >
                This product uses the TMDB API but is not endorsed or certified by TMDB.
                <img
                    className='footer__center-credits__img'
                    src={tmbdIcon}
                    alt='Путь к репозиторию с исходниками'
                />
            </a>
            <a
                className='footer__center-image'
                href='https://github.com/AlfaIV/simple-films'
            >
                <img
                    src={gitIcon}
                    alt='Путь к репозиторию с исходниками'
                />
            </a>
            <div className='footer__right-text'>VK Internship</div>
        </div>
    )
}

export default MyFooter;
