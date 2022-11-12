import { useState, useEffect } from 'react';

import UserDisplay from "../UserDisplay";
import HomeIcon from './home.png';
import PendingTaskIcon from './presentacion.png';
import CalendarIcon from './curso-online.png';
import VideoIcon from './videollamada.png';
import UserIcon from './alumno.png';
import LogoutIcon from './logout.png';

import "./Sidebar.css";
import useWindowDimensions from "../../hooks/WindowDimensions";
import FloatingButton from '../FloatingButton';
import { Link } from 'react-router-dom';

const Sidebar = ({ breakpoint, ...props }) => {
    const { width: windowWidth } = useWindowDimensions();
    const [isOpen, setOpenStatus] = useState(false);

    let classes = 'sidebar sidebar-desktop';
    if (windowWidth <= breakpoint) {
        classes = 'sidebar sidebar-mobile';
        if (isOpen) {
            classes += ' sidebar-open';
        } else {
            classes += ' sidebar-close';
        }
    }

    const sidebarButton = (windowWidth <= breakpoint)
        ? <FloatingButton
            text={'^'}
            clickedText={'X'}
            pos={{
                right: '5%',
                bottom: '5%'
            }}
            onClick={() => {
                setOpenStatus(!isOpen);
            }}
        />
        : null;

    return <>
        <div className={classes} {...props}>
            <div className="header">
                <UserDisplay
                    username="Juan Perez"
                    role="Estudiante"
                />
            </div>
            <div className="navigation">
                <ul>
                    <Link to="/courses">
                        <li>
                            <img src={HomeIcon} className="icon" />
                            <p className="title">Inicio</p>
                        </li>
                    </Link>
                    <Link to="/pendientes">
                        <li>
                            <img src={PendingTaskIcon} className="icon" />
                            <p className="title">Ver pendientes</p>
                        </li>
                    </Link>
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
        </div>
        {sidebarButton}
    </>;
};

export default Sidebar;