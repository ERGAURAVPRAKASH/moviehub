import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <div className="app">
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/movie/:imdbID' element={<MovieDetail />}/>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
