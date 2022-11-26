import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../services/firebase';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { pushToast } from '../../store/Toast';
import './CourseForm.css';

const CourseForm = () => {

    const [name, setName] = useState('');
    const [seccion, setSeccion] = useState('');
    const [grado, setGrado] = useState('');

    const dispatch = useDispatch();

    const onCreate = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, 'courses'), {
                nombre: name,
                seccion,
                grado,
                codigoDeIngreso: uuidv4()
            });

            dispatch(pushToast({
                title: 'Creacion de curso',
                description: 'La creacion del curso fue exitosa'
            }));
        } catch (err) {
            dispatch(pushToast({
                title: 'Creacion de curso',
                description: `Error al crear: ${err.message}`,
                isAlert: true
            }));
        }
    };

    return <div className="login create" style={{ backgroundColor: 'white' }}>
        <h1>Nuevo Curso</h1>
        <form action="#" style={{ backgroundColor: 'var(--clump-1-3)' }}>
            <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Seccion" value={seccion} onChange={(e) => setSeccion(e.target.value)} />
            <input type="text" placeholder="Grado" value={grado} onChange={(e) => setGrado(e.target.value)} />
            <button type="submit" className="sublog" onClick={onCreate}>Crear curso</button>
        </form>
    </div>;
};

export default CourseForm;