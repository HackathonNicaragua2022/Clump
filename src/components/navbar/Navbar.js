import React from "react";
import "./navbar.css";

class Navbar extends React.Component
{
    render(){
        //retornamos nuestro jsx
        return(
            <div className="navigation">
                <ul>
                    <li className="list">
                        <a className="#">
                            <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                            <span className="title">inicio</span>
                        </a>
                    </li>
                    <li className="list">
                        <a className="#">
                            <span className="icon"><ion-icon name="clipboard-outline"></ion-icon></span>
                            <span className="title">ver pendientes</span>
                        </a>
                    </li>
                    <li className="list">
                        <a className="#">
                            <span className="icon"><ion-icon name="calendar-number-outline"></ion-icon></span>
                            <span className="title">calendario</span>
                        </a>
                    </li>
                    <li className="list">
                        <a className="#">
                            <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                            <span className="title">cerrar sesion</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;