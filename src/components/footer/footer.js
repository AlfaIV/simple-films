import './footer.scss'
import gitIcon from '../../assets/img/github-icon.svg';

const MyFooter = () => {
    return (
        <div className='footer'>
            <div className='footer__left-text'>2024</div>
            <a
                className='footer__center-image'
                href='https://github.com/AlfaIV/simple-films'
            ><img src={gitIcon} alt='Путь к репозиторию с исходниками' /></a>
            <div className='footer__right-text'>VK Internship</div>
        </div>
    )
}

export default MyFooter;
