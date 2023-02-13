import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";
//import GenresList from './GenresList/GenresList';

function App() {
  return (
    <div className="App">
      <h1>Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/details/:movieid">
          <MovieDetails />
        </Route>

        <Route></Route>
      </Router>
    </div>
  );
}

export default App;
