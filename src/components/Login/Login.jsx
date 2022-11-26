import "./Login.css";
import fblogo from './imagenes/facebook.png'
import glogo from './imagenes/google.png'

import { useState } from 'react';
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSignIn = async (e) => {
        e.preventDefault();

        console.log(`Trying to log in with ${email} and password ${password}`);

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("Logged in succesfuly");
                navigate('/dashboard');
            })
            .catch((err) => {
                const code = err.code;
                const msg = err.message;
                console.error(`Sign in failed with code ${code}: ${msg}`);
            });
    };

    return (
        <div className="login">
            <h1>CLASS CLUMP</h1>
            <form action="#">
                <input type="text" placeholder="Correo electronico" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="sublog" onClick={onSignIn}>Login</button>
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
