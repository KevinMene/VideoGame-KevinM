import React, { Fragment, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setName('');
  }

  return (
    <Fragment>
      <div className='navbar'>
        <div className='videogames'>
          <Link to='/'>
            <button className='btnnavbar' type='submit'>
              <strong>Inicio</strong>
            </button>
          </Link>
        </div>
        <div className='home'>
          <Link to='/home'>
            <button className='btnnavbar' type='submit'>
              <strong>Home</strong>
            </button>
          </Link>
        </div>
        <div className='crear'>
          <Link to='/create'>
            <button className='btnnavbar' type='submit'>
              <strong>Crear</strong>
            </button>
          </Link>
        </div>
        <div className='searchbar'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Buscar video juego'
              type='text'>
            </input>
            <NavLink to={`/results/${name}`}>
              <button name='name' type='submit'>
                {' '}Buscar!{' '}
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar;