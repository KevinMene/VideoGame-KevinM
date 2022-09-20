import React from 'react';
import './pagination.css';

const Pagination = ({ juegosporpagina, totaljuegos, paginate }) => {

  const numpaginas = [];
  const numporpagina = Math.ceil(totaljuegos / juegosporpagina)

  for (let i = 1; i <= numporpagina; i++){
    numpaginas.push(i)
  }
  return (
    <nav className='pagination'>
      {numpaginas.map((num) => (
        <div key={num} className='item'>
          <button onClick={(e) => paginate(e, num)}>
            {num}
          </button>
        </div>
      ))}
    </nav>
  )
}

export default Pagination;