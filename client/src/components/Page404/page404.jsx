import React, { Fragment } from 'react';
import error from '../../img/error.gif';
import './page404.css';

const Page404 = () => {
  return(
    <Fragment>
      <div className='container-err'>
        <img src={error} alt="page404" />
      </div>
    </Fragment>
  )
}

export default Page404;