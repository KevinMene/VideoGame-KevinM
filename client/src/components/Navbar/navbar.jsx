import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { GiConsoleController } from 'react-icons/gi';

const Navbar = () => {

  return (
    <div className='navbar-div'>
      <NavLink to='/'><button className='btninicio'><strong>Inicio</strong></button></NavLink>
      <NavLink to='/videogames'><button className='btnVideogame'><strong>Home</strong></button></NavLink>
      <h1><GiConsoleController />VideoGame-KevinM<GiConsoleController /></h1>
      <NavLink to='/crearjuego'><button className='btnCrear'><strong>Crear juego</strong></button></NavLink>
      <NavLink to='/about'><button className='btnabout'><strong>About</strong></button></NavLink>
    </div>
  )
}

export default Navbar;