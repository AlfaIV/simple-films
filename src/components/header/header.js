import './header.scss'
import { Link } from "react-router-dom";

const MyHeader = () => {
    return (

        <div className='header'>
            <Link
                to={'/'}
                className='header__text'
            >
                Кино-справочник
            </Link>
        </div>
    )
}

export default MyHeader