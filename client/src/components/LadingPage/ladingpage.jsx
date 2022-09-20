import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import './ladingpage.css';
import { GiConsoleController } from 'react-icons/gi';


const Landingpage = () => {
  return (
    <Fragment>
      <div className='fondo-lading'>
        <div className='titulo-biev'>
          <h1><GiConsoleController /><strong>BIENVENIDO</strong><GiConsoleController/></h1>
        </div>
        <div className='titulo-lading'>
          <Link to='/videogames'>
            <button className='btntitle-lading' type='submit'>
              <strong>Entrar</strong>
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Landingpage;
