import { useRef, useState } from 'react';
import { crearUsuario } from '../../model/usuarios';
import { useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';

import "./Registro.css";

const Register = () => {
    const nav = useNavigate();

    const emailInput = useRef();
    const passwordInput = useRef();
    const nameInput = useRef();

    const onCreateUser = async (e) => {
        e.preventDefault();
        const user = await crearUsuario(emailInput.current.value, passwordInput.current.value);
        await updateProfile(user, {
            displayName: nameInput.current.value
        });
        nav('/courses');
    };

    return (
        <div className="login">
            <h1>CLASS CLUMP</h1>
            <form action="#">
                <input type="email" placeholder="Correo electronico" ref={emailInput}/>
                <input type="password" placeholder="Contraseña" ref={passwordInput}/>
                <input type="text" placeholder="Usuario" ref={nameInput} />
                <input type="text" placeholder="Numero telefónico" />
                <input type="password" placeholder="Confirmar Contraseña" />
                <button type="submit" className="sublog" onClick={onCreateUser}>Registrarse</button>
            </form>
        </div>
    );
};

export default Register;
