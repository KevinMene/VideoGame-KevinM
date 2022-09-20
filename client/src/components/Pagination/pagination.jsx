import React, { Fragment } from 'react';
import './pagination.css';

export default function Pagination({ cardPerPage, totalCards, paginate, currenPage }){
  if(Math.ceil(totalCards / cardPerPage) < currenPage) {
    paginate(1)
  }

  const pageNumbers = [];
  for(let i = 1; i <= Math.ceil(totalCards / cardPerPage); i ++){
    pageNumbers.push(i);
  }

  return(
    <Fragment>
      <div className='pag-div'>
        <ul>
          {pageNumbers.length > 1 && pageNumbers.map((p, i) =>
            p === currenPage ? (
              <li key={i}>
                <button className='btn-pag' onClick={() => paginate(p)}>{p}</button>
              </li>
            ) : (
              <li key={i}>
                <button className='btn-pag' onClick={() => paginate(p)}>{p}</button>
              </li>
            )
          )}
        </ul>
      </div>
    </Fragment>
  )
}

