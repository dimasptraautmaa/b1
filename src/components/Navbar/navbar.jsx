import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import sx from "./navbar.module.css";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <nav className={`${sx["navbar"]}`}>
            <div className={`${sx["navbar-logo"]}`}>
                <img className={`${sx["navbar-img"]}`} src="img/logo.png" alt="Fluxioner Logo" />
                <h1 className={`${sx["navbar-text"]}`}>Fluxioner Studio</h1>
            </div>
            <div className={`${sx["navbar-container"]}`}>
                <div className={`${sx["navbar-item"]}`}>
                    <NavLink className={`${sx["item"]}`}>Home</NavLink>
                    <NavLink className={`${sx["item"]}`}>About</NavLink>
                    <NavLink className={`${sx["item"]}`}>Service</NavLink>
                </div>
                <div className={`${sx["navbar-button"]}`}>
                    <div className={`${sx["button"]}`}></div>
                    <div className={`${sx["button"]}`}></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar