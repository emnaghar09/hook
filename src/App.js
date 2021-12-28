
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import Navbar from './component/navbar';
import Add from './component/add';
import './App.css';
import {movies} from './component/List';
import {useState} from 'react';



function App() {

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
    <Filter/>
    <h1> The movies available are:</h1>
  <MovieList movieList={movieList}/>
  

    </div>
  );
}

export default App;
