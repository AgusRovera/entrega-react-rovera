import React from 'react'
import NavBar from './NavBar'
import Carrito from '../Carrito'

const Header = (props) => {
    return (
        <header className='header'>
            <img src="./img/Volkswagen_logo_2019.svg (1).png" alt="Logo" className='img-logo' />
            <h1 className='titulo'>Volkswagen</h1>
            <NavBar/>
            <Carrito/>
        </header>
    )
}

export default   Header