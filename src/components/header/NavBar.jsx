import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {



    return (
        <nav className="nav">
            <ul className="nav-menu">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active" className="nav-link">Inicio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/modelos" activeClassName="active" className="nav-link">Modelos</NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Operaciones</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Ayuda</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
