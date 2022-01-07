import React from 'react'

import MovieCard from './MovieCard';

function MovieList({movieList, search}) {
    
    return (
<div className="movieList">
    { movieList.filter(el=>el.title.toUpperCase().includes(search.toUpperCase().trim()))
    .map((el, key)=> <MovieCard key={key} movie={el}/>)}
</div>

    )}
export default MovieList;