import React, { Fragment } from 'react';
import Navbar from '../Navbar/navbar';
import Videogame from '../VideoGame/Videogame';
import Pagination from '../Pagination/pagination';
import FilteredBy from '../FiilterBy/filterBy';
import SearchBar from '../SearchBar/SearchBar';
import { getAllGames, getGenres } from '../../actions/index';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import './videogames.css';
import notfound from '../../img/error.gif';
import loading from '../../img/loading.gif';


function Videogames({ allGames, getAllGames, getGenres }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [cardPerPage] = useState(15)

  //indices de la paginacion
  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;

  var currentCards;// cards que se deben de mostrar en pantalla

  //en caso de no escontrar un juego en particular
  if (typeof allGames === 'string') {
    currentCards = allGames
  } else {
    currentCards = allGames.slice(indexOfFirstCard, indexOfLastCard) //uso los indices para fraccionar que juegos muestro
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    getAllGames()
    getGenres()
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      <div className='container'>
        <Navbar />
        <FilteredBy />
        <SearchBar />
        <div className='paginacion-div'>
          <Pagination
            cardPerPage={cardPerPage}
            totalCards={allGames.length}
            paginate={paginate}
            currenPage={currentPage}
          />
        </div>
        <div className='games-div'>
          {currentCards.length > 1 ? (
            currentCards.map((g) => (
              <Videogame
                key={g.id}
                name={g.name}
                rating={g.rating}
                genres={g.genres}
                image={g.background_image}
                id={g.id}
              />
            ))
          ) : typeof currentCards === 'string' ? (
            <div>
              <img className='nonono' src={notfound} alt="notfound" />
            </div>
          ) : (
            <div className='load-div'>
              <img className='loading' src={loading} alt="loading" />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  )
};

const mapStateToProps = (state) => {
  return {
    allGames: state.filtered
  }
}

export default connect(mapStateToProps, { getAllGames, getGenres })(Videogames)
