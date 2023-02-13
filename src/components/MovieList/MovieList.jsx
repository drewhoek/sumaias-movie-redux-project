import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MovieList.css";

function MovieList() {
     // Access the history object for navigation
    // Access the dispatch function from the Redux store

  const dispatch = useDispatch();
  const history = useHistory();
    // Get the list of movies from the Redux store
  const movies = useSelector((store) => store.movies);
 // Dispatch an action to fetch the movies
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => history.push(`/details/${movie.id}`)}>
              <h3 className="movie-title">{movie.title}</h3>
              <img src={movie.poster} alt={movie.title} />
              <br />
              
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
