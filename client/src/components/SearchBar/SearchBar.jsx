import React, { Fragment } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { searchByName, getAllGames } from '../../actions/index'
import './searchbar.css';

function SearchBar({ searchByName, getAllGames }) {
  const [input, setInput] = useState({
    buscar: ''
  })
  const handleInputChange = function (e) {
    setInput({
      [e.target.name]: e.target.value
    });
  }
  const handleOnClik = () => {
    searchByName(input.buscar)
    setInput({
      buscar: ''
    });
  }
  const handleOnClickAll = () => {
    getAllGames()
    setInput({
      buscar: ''
    });
  }

  return (
    <Fragment>
      <div className='container-Sear'>
        <input className='bar-btn'
          name='buscar'
          placeholder='Buscar juego'
          onChange={handleInputChange}
          value={input.buscar}
          autoComplete='off'>
        </input>
        <button className='btnSearch' onClick={handleOnClik}><strong>Buscar</strong> </button>
        <button className='btnSearch' onClick={handleOnClickAll}><strong>Cargar Todos</strong></button>
      </div>
    </Fragment>
  )
}

export default connect(null, {searchByName, getAllGames})(SearchBar);