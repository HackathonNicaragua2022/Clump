import './Pendientes.css';

const Pendientes = (props) => {
    return(
        <div className='pendientes-all'>
            <div className='pendientes-contenedor'>
                <div className='materia'> 
                    <p>Tarea    {props.materia}    {props.fecha}</p>
                </div>
                <a href="#" className='btn-ver'>ver</a>

            </div>
        </div>
    );
};


export default Pendientes; 