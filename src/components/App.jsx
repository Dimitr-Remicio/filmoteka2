import { lazy, Suspense, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import BarLoader from 'react-spinners/BarLoader';
import './App.css';

import AppBar from './AppBar/AppBar';

const HomePage = lazy(() => delayForDemo(import('../Pages/Home/Home' /* webpackChunkName: "home-page" */)))
const MoviesPage = lazy(() => delayForDemo(import('../Pages/Movies/Movies' /* webpackChunkName: "movies-page" */)))
const MovieDetailsPage = lazy(() => delayForDemo(import('../Pages/MovieDetails/MovieDetails' /* webpackChunkName: "movie-details-page" */)))
const Cast = lazy(() => delayForDemo(import('./Cast/Cast' /* webpackChunkName: "cast" */)))
const Reviews = lazy(() => delayForDemo(import('./Reviews/Reviews' /* webpackChunkName: "reviews" */)))
const Trailer = lazy(() => delayForDemo(import('./Trailer/Trailer' /* webpackChunkName: "trailer" */)))

import Notfound from './Notfound/Notfound';
import Container from './Container/Container';

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 400);
  }).then(() => promise);
}

function App() {
  

  let [color, setColor] = useState("#F34646");

  return (
    <> 
      <AppBar></AppBar>
      <Routes>
        <Route index element={ <Container><Suspense fallback={<BarLoader color={color}/>}><HomePage></HomePage></Suspense></Container>}></Route>
        <Route path='/movies' element={ <Container><Suspense fallback={<BarLoader color={color}/>}><MoviesPage></MoviesPage></Suspense></Container>}></Route>        
        <Route path='/movies/:movieId' element={<Container><Suspense fallback={<BarLoader color={color}/>}><MovieDetailsPage></MovieDetailsPage></Suspense></Container>}>        
            <Route path='/movies/:movieId/cast' element={<Container><Suspense fallback={<BarLoader color={color}/>}><Cast></Cast></Suspense></Container>}></Route>
            <Route path='/movies/:movieId/reviews' element={<Container><Suspense fallback={<BarLoader color={color}/>}><Reviews></Reviews></Suspense></Container>}></Route>
            <Route path='/movies/:movieId/videos' element={<Container><Suspense fallback={<BarLoader color={color}/>}><Trailer></Trailer></Suspense></Container>}></Route>
        </Route>


        <Route
         path='*'
         element={
          <Container>
            <div className='pageerror'>
              <Notfound></Notfound>
            </div>
          </Container>
          }>
        </Route>
  
      </Routes> 
    </>
  )
}

//   route for add path /goit-react-hw-05-movies

export default App
