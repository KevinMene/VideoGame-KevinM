import { React, useEffect, } from 'react';
import { connect } from 'react-redux';
import { getVideogameDetail } from '../../actions/index'
import { NavLink } from 'react-router-dom';
import './gamedetail.css';
import Navbar from '../Navbar/navbar';
import Footer from "../Footer/footer";
import error from '../../img/error.gif';
import { BiArrowBack } from 'react-icons/bi';


function GameDetails(props) {

  const { getVideogameDetail, gameDetails } = props
  const { idVideogame } = props.match.params;

  // me carga los details del juego
  useEffect(() => {
    getVideogameDetail(idVideogame);
  }, [idVideogame]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container-detail">
      <Footer />
      <Navbar />
      <div className="details-div">
        {gameDetails ? (
          <div className='info-div'>
            <h3 className="title">{gameDetails.name}</h3>
            {gameDetails.background_image ? (
              <div className="div-img">
                <img src={gameDetails.background_image} alt="Videogame"></img>
              </div>
            ) : (
              <div className="div-img">
                <img src={error} alt="Videogame"></img>
              </div>
            )}
            {
              <p>
                <strong>Release Date</strong>:{" "}
                {`${gameDetails.released || "None"}`}
              </p>
            }
            <p>
              <strong>Rating</strong>: ★ {`${gameDetails.rating}`}
            </p>
            {gameDetails.description &&
              gameDetails.genres &&
              gameDetails.platforms ? (
              <div className="div-descr">
                {
                  <p className="descripcion">
                    {gameDetails.description.replace(/(<([^>]+)>)/gi, "")}
                  </p>
                }
                {
                  <p>
                    <strong>Genres</strong>:{" "}
                    {`${gameDetails.genres.join(", ")}`}
                  </p>
                }
                {
                  <p>
                    <strong>Platforms</strong>:{" "}
                    {`${typeof gameDetails.platforms === "string"
                      ? gameDetails.platforms
                      : gameDetails.platforms.join(", ")
                      }`}
                  </p>
                }
                <div className='div-btn'>
                  <NavLink to="/videogames">
                    <button className='btnvolver'><BiArrowBack /></button>
                  </NavLink>
                </div>
              </div>
            ) : (
              <h1>Cargando</h1>
            )}
          </div>
        ) : (
          <h1>Cargando</h1>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    gameDetails: state.gameDetails
  }
}

export default connect(mapStateToProps, { getVideogameDetail })(GameDetails)
