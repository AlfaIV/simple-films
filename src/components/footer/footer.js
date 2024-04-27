import './footer.scss'

const Footer = () => {
    return (
        <div class='footer'>
            <div class='footer__left-text'>2024</div>
            <a
                class='footer__center-image'
                href='../../assets/img/github-icon.svg'
            ><img src='/icons/git.svg' alt='Путь к репозиторию с исходниками' /></a>
            <div class='footer__right-text'>VK Internship</div>
        </div>
    )
}

export default Footer;
