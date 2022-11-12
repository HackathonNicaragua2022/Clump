import './Home.css'
import aula from './imagenes/aula.png';
import rAum from './imagenes/realidad-aumentada.png';
import cuest from './imagenes/cuestionario.png';
import ardilla from './imagenes/ardilla.png';
import logo from './imagenes/Logo_positivo-06.png';

const Home = () => {
    return (
        <div className='home'>
            <div className='inicio'>
                <img src={aula} alt="Aula" />
                <div>
                    <h2>¡SEA BIENVENIDO!</h2>
                    <p>A Class Clump, platoforma de aprendizaje dinamica y de uso facil con Realidad aumentada</p>
                    <a href='/' className='ir-inicio'>Inicio</a>
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
                <div className='uso-list'>
                    <ul>
                        <li>Diseñado para todas las etapas educativas</li>
                        <li>Navegación e intefaz intuitiva</li>
                        <li>Ayuda con el asistente virtual en caso de problemas</li>
                    </ul>
                    <img src={logo} alt="" />
                </div>

            </div>
        </div>
    );
}

export default Home;