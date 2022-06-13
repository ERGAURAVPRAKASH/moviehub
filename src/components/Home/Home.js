import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing"
import movieApi from "../../common/apis/movieApi"
import {APIKey} from "../../common/apis/MovieApiKey"
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'
const Home = () => {

  const movieText = "avengers";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      //For Parameters search http://www.omdbapi.com/ parameter section.
      const response = await movieApi
        .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
        console.log("err:", err);
      })
      dispatch(addMovies(response.data));
    }
    fetchMovies();
  }, []);

  return (
    <>
      <div className='banner-img'></div>
      <MovieListing />
    </>
  )
}

export default Home