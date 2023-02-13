import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function MovieDetails() {
  const history = useHistory();
    // Access the history object for navigation
  // Access the dispatch function from the Redux store
  const dispatch = useDispatch();

  // Get the movie ID from the URL parameters
  let params = useParams();
  let movieId = params.movieid;

  // Get the list of movies from the Redux store
  const movies = useSelector((store) => store.movies);

  let movie = movies.find((movie) => movie.id === Number(movieId));

  const genres = useSelector((store) => store.genres);
    // Filter the genres to only get the genres for the current movie
  let genreList = genres.filter((genre) => genre.movieId === movieId);
  console.log("in GenreList", genreList);
  // Dispatch an action to fetch the genres
  useEffect(() => {
    dispatch({ type: "FETCH_GENRES" });
  }, []);

  return (
    <div className="movie-details">
      <h1>Movie Details</h1>
      <ul>
        <li className="movie-title">
          Title: {movie.title}
          <br />
          <br />
          <img src={movie.poster} />
        </li>
        <br />
        <br />
        <li>Description: {movie.description}</li>
        <section className="genres">
          {genreList.map(genreList => (
            <div key={genreList.id}>
              <li className="genre">Genre: {genreList.name}</li>
            </div>
          ))}
        </section>
      </ul>
      <button onClick={() => history.push("/")}>Back to Movies</button>
    </div>
  );
 }  
        

export default MovieDetails;
