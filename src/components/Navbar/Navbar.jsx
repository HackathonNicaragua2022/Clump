import './Navbar.css';
import Logo from './logo.png';
import { Link } from 'react-router-dom';
import menu from './menu.png';

import useWindowDimensions from "../../hooks/WindowDimensions";
import { useState } from 'react';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [classnav, setClassnav] = useState("nav-toggle");
    const [classlist, setClasslist] = useState("classul");

    const handleClick = () => {
        setOpen(!open);
        if (open) {
            setClassnav("nav-toggle");
            setClasslist("classul-close");
        } else {
            setClassnav("nav-active");
            setClasslist("classul");

        }
        console.log(open)
    };
    return <nav>
        <div className="logo">
            <img src={Logo} className='img-logo' alt='Logo' />
        </div>
        <div className='img-logo'>
            <p className="brand-name">
                Class Clump
            </p>
        </div>
        <ul className={classlist}>
            <Link to='/' className='list-link'><li className='lisk-item'>Inicio</li></Link>
            <Link to='/register' className='list-link'><li className='lisk-item'>Registrarse</li></Link>
            <Link to='/login' className='list-link'><li className='lisk-item'>Iniciar Sesión</li></Link>
        </ul>
        <button className={classnav} aria-label="Abrir menú" onClick={handleClick}>
            <i className="fas fa-bars"></i>
        </button>
    </nav >;
};

export default Navbar;