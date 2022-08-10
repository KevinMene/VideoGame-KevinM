import React, { Fragment, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

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
            <h2>Inicio</h2>
          </Link>
        </div>
        <div className='home'>
          <Link to='/home'>
            <h2>Home</h2>
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
                {' '}Go!{' '}
              </button>
            </NavLink>
          </form>
        </div>
        <div className='crear'>
          <Link to='/create'>
            <h2>Crear</h2>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar;