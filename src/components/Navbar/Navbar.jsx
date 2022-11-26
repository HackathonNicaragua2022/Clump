import './Navbar.css';
import Logo from './logo.png';
import { Link } from 'react-router-dom';
import menu from './menu.png';

import useWindowDimensions from "../../hooks/WindowDimensions";
import { useState } from 'react';

const Navbar = () => {
    let classnav = {
        navbar_logo: 'img-logo',
        navbar_menu: 'nav-toggle',
        navbar_name: 'branding',
        navbar_list: 'classul'
    }


    const { windowWidth } = useWindowDimensions();
    if (windowWidth < 900) {
        classnav.navbar_menu = 'nav-active';
        classnav.navbar_list = 'classul-close';
        classnav.navbar_logo = 'classul-close';
        classnav.navbar_name = 'classul-close';
    }
    const changeclass = () => {
        if (classnav.navbar_menu === 'nav-active') {
            console.log('active');
            classnav.navbar_menu = 'nav-toggle';
        }
        else if (classnav.navbar_menu === 'nav-toggle') {
            console.log(classnav.navbar_list);
            classnav.navbar_menu = 'nav-active';
            classnav.navbar_list = 'classul';
        }
    }
    return <nav>
        <div className="logo">
            <img src={Logo} className={classnav.navbar_logo} alt='Logo' />
        </div>
        <button className={classnav.navbar_menu} aria-label="Abrir menú" onClick={changeclass}>
            <i className="fas fa-bars"></i>
        </button>
        <div className={classnav.navbar_logo}>
            <p className="brand-name">
                Class Clump
            </p>
        </div>
        <ul className={classnav.navbar_list}>
            <Link to='/'><li>Inicio</li></Link>
            <Link to='/register'><li>Registrarse</li></Link>
            <Link to='/login'><li>Iniciar Sesión</li></Link>
        </ul>
    </nav >;
};

export default Navbar;