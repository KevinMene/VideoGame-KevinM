import React from 'react';
import Card from '../Card/card';
import Cargando from '../loading/cargando';
import './videogame.css';

const Videogame = ({videogames}) => {
  return (
    <div className='mostrar'>
      {videogames.length > 0 ? videogames.map((data) => (<Card data={data} />))
      : <Cargando />
    }
    </div>
  )
}

export default Videogame;