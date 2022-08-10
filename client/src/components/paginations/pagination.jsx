import React from 'react';

const Pagination = ({ juegosporpagina, totaljuegos, paginacion }) => {

  const numpaginas = [];
  const numporpagina = Math.ceil(totaljuegos / juegosporpagina)

  for (let i = 1; i <= numporpagina; i++){
    numpaginas.push(i)
  }
  return (
    <nav className='pagination'>
      {numpaginas.map((num) => (
        <div key={num} className='item'>
          <button onClick={(e) => paginacion(e, num)}>
            {num}
          </button>
        </div>
      ))}
    </nav>
  )
}

export default Pagination;