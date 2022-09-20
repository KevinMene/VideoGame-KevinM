import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtergenre, getgenres, orderasc, ordercreate, orderdesc } from '../../actions';


const FilterGame = ({ paginate }) => {
  const dispatch = useDispatch();
  const genres = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(getgenres());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //Filtrar por genre
  const handleFilter = (e) => {
    dispatch(filtergenre(e.target.value));
    paginate(e, 1);
  };

  //ordenado
  const handleOrder = (e) => {
    if (e.target.value === 'asc_name' || e.target.value === 'asc_rating') {
      dispatch(orderasc(e.target.value));
    } else if (e.target.value === 'desc_name' || e.target.value === 'desc_rating') {
      dispatch(orderdesc(e.target.value))
    } else {
      dispatch(filtergenre(e.target.value));
    }
  };

  //filtrar por creado
  const handleCreador = (e) => {
    if (e.target.value === 'Api' || e.target.value === 'Created') {
      dispatch(ordercreate(e.target.value));
      paginate(e, 1);
    } else {
      dispatch(filtergenre(e.target.value));
      paginate(e, 1);
    }
  };

  return (
    <Fragment>
      <div className='filter'>
        <div className='filtergenre'>
          <p>Filtrado por Genero</p>
          <select onChange={(e) => handleFilter(e)}>
            <option value='All'></option>
            {genres.map((e) => (
              <option value={e.name}>{e.name}</option>
            ))}
          </select>
        </div>
        <div className='order'>
          <p>Ordenamiento</p>
          <select onChange={(e) => handleOrder(e)}>
            <option value='All' default> All </option>
            <option value='asc_name'>( A - Z )</option>
            <option value='asc_rating'>(lower- Higher)</option>
            <option value='desc_name'>( Z - A )</option>
            <option value='desc_rating'>( Higher- Lower )</option>
          </select>
        </div>
        <div className='creador'>
          <p>Creador Filtrado</p>
          <select onChange={(e) => handleCreador(e)}>
            <option default>All</option>
            <option value='Api'>VideoGames de Api</option>
            <option value='Created'>VideoGames de Creador</option>
          </select>
        </div>
      </div>
    </Fragment>
  )
}

export default FilterGame;