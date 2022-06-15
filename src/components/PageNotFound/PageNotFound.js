import React from 'react';
import "./PageNotFound.scss";
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
    <div className='page'>
      <div className='oops'>Oops!</div>
      <div className='not-found'>404 - Page Not Found </div>
      <Link to="/">
        <div className='back-button'>
          <button>Home Page</button>
        </div>
      </Link>
    </div>
    </>
  )
}

export default PageNotFound