import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing"
import { useDispatch } from 'react-redux'
import {fetchAsyncMovies } from '../../features/movies/movieSlice'
const Home = () => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <>
      <div className='banner-img'></div>
      <MovieListing />
    </>
  )
}

export default Home