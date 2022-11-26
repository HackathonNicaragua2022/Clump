import './Home.css'
import aula from './imagenes/aula.png';
import rAum from './imagenes/realidad-aumentada.png';
import cuest from './imagenes/cuestionario.png';
import ardilla from './imagenes/ardilla.png';
import logo from './imagenes/Logo_positivo-06.png';

import { auth } from '../../services/firebase';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (auth.currentUser !== null) {
            navigate('/dashboard');
        }
    }, []);

    return (
        <div className='home'>
            <div className='inicio'>
                <img src={aula} alt="Aula" />
                <div>
                    <h2>¡SEA BIENVENIDO!</h2>
                    <p>A Class Clump, plataforma de aprendizaje dinamica y de uso facil con Realidad aumentada</p>
                    <a href='/dashboard' className='ir-inicio'>Cursos</a>
                </div>
            </div>
            <div className='func'>
                <h2>¿QUÉ PODEMOS HACER CON CLASS CLUMP?</h2>
                <div className='desc'>
                    <div className='card-desc'>
                        <img src={rAum} alt="Aula" />
                        <p>Realidad aumentada para videollamadas</p>
                    </div>
                    <div className='card-desc'>
                        <img src={cuest} alt="" />
                        <p>Crear cuestionarios y clases más divertidas</p>
                    </div>
                    <div className='card-desc'>
                        <img src={ardilla} alt="" />
                        <p>Recibir guía de un asistente virtual</p>
                    </div>
                </div>
            </div>

            <div className='usos'>
                <h2>FACIL DE USAR</h2>
                <div className='uso'>
                    <ul>
                        <li>Diseñado para todas las etapas educativas</li>
                        <li>Navegación e intefaz intuitiva</li>
                        <li>Ayuda con el asistente virtual en caso de problemas</li>
                    </ul>
                    <img src={logo} alt="" />
                </div>
            </div>
            
            <footer>
                <h2>CLASS CLUMP</h2>
                <div className='footer-content'>
                    <div className='Servicios'>
                            <h3>Servicios</h3>
                            <p>
                                +505 87712964
                            </p>
                            <p className='correo'>
                                classclump@gmail.com
                            </p>
                        </div>
                        <h3 className='sugerencia-text'>sugerencias</h3>
                        <div className='sugerencias'>
                            <input type="text"  name="sugerencia"/>
                            <button>Enviar</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;