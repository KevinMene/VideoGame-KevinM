import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import './ladingpage.css';


const Landingpage = () => {
  return (
    <Fragment>
      <div className='fondo'>
        <div className='titulo'>
          <Link to='/home'>
            <button className='btntitle' type='submit'>
              <strong>Entrar</strong>
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Landingpage;
