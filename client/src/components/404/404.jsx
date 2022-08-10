import React, { Fragment } from 'react';

const Falla = ({image}) => {
  return(
    <Fragment>
      <div>
        {image === 'noimage' ?
        <img className='img' src='https://acortar.link/e4iUP' alt='falla link' />
          : <img className='falla' src='https://acortar.link/xjEvD' alt='falla link' />}
      </div>
    </Fragment>
  )
}

export default Falla;