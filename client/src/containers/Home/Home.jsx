import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getvideogames, reserall } from '../../actions';
import Pagination from '../../components/paginations/pagination';
import Videogame from '../../components/videogame/videogames';
import FilterGame from '../filter/filter';
import './home.css'

export default function Home() {
  const dispatch = useDispatch();
  const filterGame = useSelector((state) => state.filterGame);
  const filter = useSelector((state) => state.filter);
  const order = useSelector((state) => state.order);
  const game = useSelector((state) => state.game);

  useEffect(() => {
    dispatch(reserall());
    dispatch(getvideogames());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps



  //filtrado y ordenado
  let allgame;
  filter === 'All' && order === 'Select'
  ? (allgame = game)
  : (allgame = filterGame);

  //paginacion
  function paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  const [page, setPage] = useState(1);
  const [juegosporpagina] = useState(15);

  let lastcard = page * juegosporpagina;
  let firtscard = lastcard - juegosporpagina;
  let currentgame;

  if (typeof allgame === 'string'){
    currentgame = allgame;
  } else {
    currentgame = allgame.slice(firtscard , lastcard)
  }

  return (
    <Fragment>
      <div className='home'>
        <FilterGame paginate={paginate} />
        <Videogame game={currentgame} />
        <Pagination
          juegosporpagina={juegosporpagina}
          totaljuegos={allgame.length}
          paginate={paginate}
        />
      </div>
    </Fragment>
  )
}

