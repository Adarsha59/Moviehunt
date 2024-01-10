import React, { useEffect } from 'react';
import './App.css';
import { fetchDataFromApi } from './components/Api';

import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './App/homeSlice';
import Home from './Page/Home/home';
import Error from './Page/404/error';
import Details from './Page/Details/Details';
import Explore from './Page/Explore/explore';
import Search from './Page/Search/search';
import NavBar from './components/Nav/NavBar';
import Footer from './components/Footer/Footer';
import PageNotFound from './Page/404/PageNotFound';

function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetchApiConfig();
  }, []);
  const fetchApiConfig = () => {
    Promise.all([
      fetchDataFromApi('/configuration'),
      fetchDataFromApi('/genre/movie/list'), // For movie genres
      fetchDataFromApi('/genre/tv/list'),    // For TV show genres
    ])
      .then(([configRes, movieGenreRes, tvGenreRes]) => {
        // console.log(configRes);
        // console.log(movieGenreRes);
        // console.log(tvGenreRes);
  
        const url = {
          backdrop: configRes.images.secure_base_url + 'original',
          profile: configRes.images.secure_base_url + 'original',
          poster: configRes.images.secure_base_url + 'original',
        };
  
        const url2 = {
          movieGenres: movieGenreRes.genres.map((genre) => ({
            id: genre.id,
            name: genre.name,
          })),
          tvGenres: tvGenreRes.genres.map((genre) => ({
            id: genre.id,
            name: genre.name,
          })),
        };
  
        dispatch(getApiConfiguration(url, url2));
      })
      .catch((error) => {
        console.error('Error fetching API configuration:', error);
      });
  };
  
 

  return (
    <>
      <Router>
        <NavBar/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/:mediatype/:id" element={<Details />} />
          <Route path="/explore/:mediatype" element={<Explore />} />
          <Route path="/search/:query" element={<Search />} />
           <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;




// const fetchApiConfig = () => {
//   fetchDataFromApi('/configuration ').then((res) => {
//     console.log(res);
//     const url ={

//       backdrop: res.images.secure_base_url +"original",
//       profile : res.images.secure_base_url +"original",
//       poster : res.images.secure_base_url +"original",
      
//     }




//     dispatch(getApiConfiguration(url));
//   });
// };
