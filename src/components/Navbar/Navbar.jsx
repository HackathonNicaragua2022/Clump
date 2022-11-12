import './Navbar.css';
import Logo from './logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return <nav>
        <div className="logo">
            <img src={Logo} />
        </div>
        <div className="branding">
            <p className="brand-name">
                Class Clump
            </p>
        </div>
        <ul>
            <Link to='/'><li>Inicio</li></Link>
            <Link to='/register'><li>Registrarse</li></Link>
            <Link to='/login'><li>Iniciar Sesión</li></Link>
        </ul>
    </nav>;
};

export default Navbar;