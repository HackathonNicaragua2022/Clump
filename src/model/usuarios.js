import { auth } from '../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const crearUsuario = async (email, password) => {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return response.user;
};