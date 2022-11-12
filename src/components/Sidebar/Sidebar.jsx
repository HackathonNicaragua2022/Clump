import UserDisplay from "../UserDisplay";
import HomeIcon from './home.png';
import PendingTaskIcon from './presentacion.png';
import CalendarIcon from './curso-online.png';
import VideoIcon from './videollamada.png';
import UserIcon from './alumno.png';
import LogoutIcon from './logout.png';

import "./Sidebar.css";

const Sidebar = ({ paths }) => {
    return <div className="sidebar">
        <div className="header">
            <UserDisplay 
                username="Gallo claudio"
                role="Estudiante"
            />
        </div>
        <div className="navigation">
            <ul>
                <li>
                    <img src={HomeIcon} className="icon" />
                    <p className="title">Inicio</p>
                </li>
                <li>
                    <img src={PendingTaskIcon} className="icon" />
                    <p className="title">Ver pendientes</p>
                </li>
                <li>
                    <img src={CalendarIcon} className="icon" />
                    <p className="title">Calendario</p>
                </li>
                <li>
                    <img src={VideoIcon} className="icon" />
                    <p className="title">Videollamada AR</p>
                </li>
                <li>
                    <img src={UserIcon} className="icon" />
                    <p className="title">Informacion Personal</p>
                </li>
            </ul>
        </div>
        <div className="settings">
            <ul>
                <li>
                    <img src={LogoutIcon} className="icon" />
                    <p className="title">Cerrar Sesión</p>
                </li>
            </ul>
        </div>
    </div>;
};

export default Sidebar;