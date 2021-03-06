import React, { useState } from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    if(term === "") {
      return alert("please enter search term")
    };
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    // console.log(term);
    setTerm("");
  };

  return (
    <div className='header'>
      <Link to="/">
        <div className='logo'>
          Movie Hub
        </div>
      </Link>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows" 
            onChange={(e)=> setTerm(e.target.value)}
          />
          <button type='submit'>
            <i className='fa fa-search'></i>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Header