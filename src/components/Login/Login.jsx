import "./Login.css";
import fblogo from './imagenes/facebook.png'
import glogo from './imagenes/google.png'

const Login = () => {
    return (
        <div className="login">
            <h1>CLASS CLUMP</h1>
            <form action="#">
                <input type="text" placeholder="Correo electronico" />
                <input type="password" placeholder="Contraseña" />
                <button type="submit" className="sublog">Login</button>
                <h6>INICIA SESIÓN CON:</h6>
                <div className="auth-mod">
                    <img className="auth" src={fblogo} alt="Facebook" />
                    <img className="auth" src={glogo} alt="Google" />
                </div>
            </form>

        </div>
    );
};

export default Login;
