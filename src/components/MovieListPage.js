import React, { useEffect, useState } from 'react';
import "./MovieListPage.css"

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    
    fetch('https://hoblist.com/api/movieList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: 'movies',
        language: 'kannada',
        genre: 'all',
        sort: 'voting',
      }),
    })
      .then((response) => response.json())
      .then((data) => setMovieList(data.result))
      .catch((error) => console.error('Error fetching movie list:', error));
  }, []); 

  return (
    <div className="movie-list-container">
      <h2 className='basha'>Movie List</h2>
      <ul className="unorder">
        {movieList.map((movie) => (
          <li className="listitem" key={movie.index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieListPage;
