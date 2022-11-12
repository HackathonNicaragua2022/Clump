import './Navbar.css';
import Logo from './logo.png';

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
            <li>Inicio</li>
            <li>Registrarse</li>
            <li>Iniciar Sesión</li>
        </ul>
    </nav>;
};

export default Navbar;