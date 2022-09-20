import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchvideogames } from '../../actions';
import NotFound from '../../components/404/NotFound';
import Pagination from '../../components/paginations/pagination';
import Videogame from '../../components/videogame/videogames';

const Search = () => {
  const dispatch = useDispatch();
  let { name } = useParams();

  const searchvideogame = useSelector((state) => state.searchvideogame);

  useEffect(() => {
    dispatch(searchvideogames(name));
  }, [name]); // eslint-disable-line react-hooks/exhaustive-deps

  //paginacion
  const paginate = (e, num) => {
    e.preventDefault();
    setPage(num);
  }

  const [page, setPage] = useState(1);
  const [juegosporpagina] = useState(10);

  let lastcard = page * juegosporpagina;
  let firtscard = lastcard - juegosporpagina;
  let currentgame = searchvideogame.slice(firtscard, lastcard);

  return (
    <Fragment>
      <div className='search'>
        {searchvideogame.length > 0 ?
          <>
            <h1>Resultad con {name}!</h1>
            <Videogame videogames={currentgame} />
            <Pagination
              juegosporpagina={juegosporpagina}
              totaljuegos={searchvideogame.length}
              paginate={paginate}
            />
          </> : <NotFound image={'no juegos'} />
        }
      </div>
    </Fragment>
  )
}

export default Search;