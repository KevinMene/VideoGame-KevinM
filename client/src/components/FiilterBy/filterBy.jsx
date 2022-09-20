import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { filterBy, orderBy } from '../../actions/index';
import './filterby.css';

function FilteredBy ({orderBy, genres, filterBy}) {
  const handleSelect = (e) => {
    filterBy(e.target.value)
  }

  const handleSelect2 = (e) => {
    orderBy(e.target.value)
  }

  return (
    <Fragment>
      <div className='container-div-fil'>
        <select className='selectcount' onChange={handleSelect} name='' id=''>
          <option className='option' value='default'>Todos</option>
          <optgroup clasname='opgroup' label='Database'>
            <option clasname='option' valaue='DB'>Creados</option>
          </optgroup>
          <optgroup clasname='opgroup' label='API'>
            <option clasname='option' valaue='DB'>API</option>
          </optgroup>
          <optgroup clasname='opgroup' label='GENRES'>
            {genres && genres.map(g => <option key={g.name} value={g.name}>{g.name}</option>)}
          </optgroup>
        </select>
        <select className='selectcount' onChange={handleSelect2} name='' id=''>
          <option className='option' value="default">Orden</option>
          <optgroup className='optiongroup' label='Rating'>
            <option className='option' value="asc">Mayor a Menor</option>
            <option className='option' value='desc'>Menor a Mayor</option>
          </optgroup>
          <optgroup className='optiongroup' label='Alphabetic'>
            <option className='option' value="A-Z">A - Z</option>
            <option className='option' value='Z-A'>Z - A</option>
          </optgroup>
        </select>
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    genres : state.genres
  }
}

export default connect(mapStateToProps, {orderBy, filterBy})(FilteredBy);