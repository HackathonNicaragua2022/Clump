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

import { auth } from '../../services/firebase';

const Sidebar = ({ breakpoint, ...props }) => {
    const { windowWidth: windowWidth } = useWindowDimensions();
    const [isOpen, setOpenStatus] = useState(false);
    const [user, setUser] = useState(auth.currentUser);

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

    useEffect(() => {
        setUser(auth.currentUser);
    }, [auth.currentUser]);

    return <>
        <div className={classes} {...props}>
            <div className="header">
                <UserDisplay
                    username={user ? user.displayName : 'Anon'}
                    role="Estudiante"
                />
            </div>
            <div className="navigation">
                <ul>
                    <Link to="/dashboard">
                        <li>
                            <img src={HomeIcon} className="icon" alt="home" />
                            <p className="title">Inicio</p>
                        </li>
                    </Link>
                    <Link to="/pendientes">
                        <li>
                            <img src={PendingTaskIcon} className="icon" alt="tasks" />
                            <p className="title">Ver pendientes</p>
                        </li>
                    </Link>
                    <li>
                        <img src={CalendarIcon} className="icon" alt="calendar" />
                        <p className="title">Calendario</p>
                    </li>
                    <li>
                        <img src={VideoIcon} className="icon" alt="video" />
                        <p className="title">Videollamada AR</p>
                    </li>
                    <li>
                        <img src={UserIcon} className="icon" alt="user" />
                        <p className="title">Informacion Personal</p>
                    </li>
                </ul>
            </div>
            <div className="settings">
                <ul>
                    <li>
                        <img src={LogoutIcon} className="icon" alt="logout" />
                        <p className="title">Cerrar Sesión</p>
                    </li>
                </ul>
            </div>
        </div>
        {sidebarButton}
    </>;
};

export default Sidebar;