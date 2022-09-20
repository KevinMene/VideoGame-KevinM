import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './videogame.css';

export default function Videogame(props) {
  return (
    <Fragment>
      <div className='container-game'>
        <div className='game-div'>
          <div className='Imgcont'>
            {props.image ? (
              <img src={`${props.image}`} alt='Videogame' className='img'></img>
            ) : (
              <img src='photo' alt='Videogame' className='img' />
            )}
          </div>
          <div className='content-div'>
            <div className='div-info'>
              <h3 className='title-game'>{props.name}</h3>
              {
                <p>
                  <strong>Rating</strong>: ★ {`${props.rating}`}
                </p>
              }
              {
                <p>
                  <strong>Genres :</strong> {" "}
                  {`${typeof props.genres === 'string' ? props.genres : props.genres.join(',')
                    }`}
                </p>
              }
              <div className='btn-div'>
                {props.id && (
                  <Link to={`/videogame/${props.id}`}>
                    <button className='btn-detail'>Details</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
};