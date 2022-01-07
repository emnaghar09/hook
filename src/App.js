
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import Navbar from './component/navbar';
import Add from './component/add';
import Home from './component/home';
import Details from './component/Details'

import './App.css';
import {movies} from './component/List';
import { useState } from 'react/cjs/react.development';
import {Route, Switch} from 'react-router-dom';

// import {useState} from 'react';



function App() {
  const [search, setsearch] = useState('')
  const [rating, setrating] = useState('')
const [movieList, setMovieList]= useState(movies)
console.log(movieList)
//function to add a new movie to the list
  const handlerMovie = (movie) => {
      setMovieList([...movieList, movie]);
  }
  return (
    <div className="App">
    <Navbar/>
    <Add handlerMovie={handlerMovie} />
    <Filter setsearch={setsearch} rating={setrating}/>

<Switch>
<Route exact path='/' component={Home}></Route>
<Route exact path='/' render ={()=> <MovieList movieList={movieList}/> }/> 
<Route path='/Details/:id' render ={(props)=><Details {...props} Liste={movies} /> }/>
</Switch>

    </div>
  );
}

export default App;
