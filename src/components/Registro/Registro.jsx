import { useState } from 'react';
import { useNavigate } from 'react-router';
import { updateProfile, createUserWithEmailAndPassword } from 'firebase/auth';
import db, { auth } from './../../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { clearAll, pushToast, pushToasts } from '../../store/Toast';

import "./Registro.css";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isStudent, setIsStudent] = useState(true);

    const validate = () => {
        const messages = [];

        if (email.length === 0) {
            messages.push({
                title: 'Correo electronico',
                description: 'El correo electronico no puede estar vacio'
            });
        }

        if (password.length === 0) {
            messages.push({
                title: 'Contraseña',
                desceription: 'La contraseña no puede estar vacia'
            });
        } else if (password.length < 6) {
            messages.push({
                title: 'Contraseña',
                description: 'La contraseña debe tener una longitud mayor o igual a 6'
            });
        }

        if (username.length < 3) {
            messages.push({
                title: 'Usuario',
                description: 'El nombre de usuario es muy corto, debe ser de al menos 3 digitos'
            });
        }

        if (phoneNumber.length !== 8) {
            messages.push({
                title: 'Telefono',
                description: 'El numero de telefono debe tener 8 digitos'
            });
        } else if (isNaN(phoneNumber)) {
            messages.push({
                title: 'Telefono',
                description: 'El numero de telefono solo debe contener numeros'
            });
        }

        if (password !== confirmPassword) {
            messages.push({
                title: 'Confirmacion de contraseña',
                description: 'Las contraseñas no coinciden'
            });
        }

        return messages;
    };

    const onCreateUser = async (e) => {
        e.preventDefault();

        console.log(`Creating user with ${email} ${password} ${username} ${phoneNumber} ${confirmPassword}`);
        const errors = validate();

        if (errors.length > 0) {
            dispatch(clearAll());
            dispatch(pushToasts(
                errors.map(err => ({ ...err, isAlert: true }))
            ));
            return;
        }

        try {
            const cred = await createUserWithEmailAndPassword(auth, email, password);
            const user = cred.user;
            await updateProfile(user, { displayName: username });
            await addDoc(collection(db, 'users'), {
                userId: user.uid,
                isStudent,
                phoneNumber
            });
            dispatch(pushToast({
                title: "Creacion de usuario",
                description: "Usuario creado con exito",
                isAlert: false,
            }));
            navigate('/dashboard');
        } catch (error) {
            dispatch(pushToast({
                title: 'Creacion de cuenta',
                description: `Error ${error.code}: ${error.message}`,
                isAlert: true
            }));
        }
    };

    return (
        <div className="login">
            <h1>CLASS CLUMP</h1>
            <form action="#">
                <input type="email" placeholder="Correo electronico" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirmar Contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <input type="text" placeholder="Numero telefónico" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <select name="role" id="role" onChange={(e) => setIsStudent(e.target.value === "true" ? true : false)}>
                    <option value="true">Estudiante</option>
                    <option value="false">Maestro</option>
                </select>
                <button type="submit" className="sublog" onClick={onCreateUser}>Registrarse</button>
            </form>
        </div>
    );
};

export default Register;
