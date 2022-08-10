import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Falla from '../404/404';

const Card = ({data}) => {
  return (
    <Fragment>
      <div className='card'>
        <Link to={`/videogames/${data.id}`}>
          {data.image === null || !data.image ? (
            <Falla image={'noimage'} />
          ) : (
            <img className='img' src={data.image} alt={data.name} />
          )}
        </Link>
        <div className='textcard'>
          <div className='Genrename'>
            <div className='name'>
              {data.name}
            </div>
            <div className='genre'>
              {data.genre}
            </div>
          </div>
          <div className='rating'>
            <div className='elrating'>
              {data.rating}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Card;