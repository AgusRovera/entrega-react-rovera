import React from 'react'
import { NavBar } from './NavBar'
import { Link } from 'react-router-dom'
import Carrito from '../Carrito'

export const Header = (props) => {

    return (
    <header className="header">
        <Link to="/"><h1>Volkswagen</h1></Link>
        <NavBar />
        <Carrito/>
    </header>
    )
}