import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getvideogamesid } from '../../actions';
import Notfound from '../../components/404/NotFound';

const GameDetail = ({ id }) => {
  const dispatch = useDispatch();
  const videogame = useSelector((store) => store.searchvideogamebyid);

  useEffect(() => {
    dispatch(getvideogamesid(id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      <div className='container'>
        <div className='colums'>
          <div className='image'>
            {videogame.image === null || !videogame.image ? <Notfound image={'no Image'} />
              : <img src={videogame.image} alt={videogame.name} />}
            <ul>
              <li>{videogame.name}</li>
              <li>({videogame.released})</li>
            </ul>
          </div>
          <div className='detalles'>
            <h2>Este Juego:</h2>
            <p>{videogame.description}</p>
            <div className='genre'>
              <p>Es un juego de {videogame.genres} clasificado por puntos de {videogame.rating}.</p>
            </div>
            <div className='platforms'>
              <p>Se juega en {videogame.platforms}</p>
            </div>
          </div>
        </div>
          <Link to='/home'>
            <button className='btn' type='submit'>Back</button>
          </Link>
      </div>
    </Fragment>
  )
}
export default GameDetail;