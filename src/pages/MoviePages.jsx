import { useEffect, useState } from "react";
import Addmovies from "../components/Addmovies";
import MovieList from "../components/MovieList";
import { Link } from "react-router";

function MoviePage() {
 const [movies, setMovies] = useState([]);

 function getMoviesFromLocalStorage() {
  const moviesStoredInLocalStorage = JSON.parse(localStorage.getItem("user_movies")) === null ? [] : JSON.parse(localStorage.getItem("user_movies"));
  setMovies(moviesStoredInLocalStorage);
 }

 useEffect(() => {
  getMoviesFromLocalStorage()
 }, []);

 return(
  <>
   <Link></Link>
   <div>
    <Addmovies movies={movies} setMovies={setMovies}/>
    <MovieList movies={movies}/>
   </div>
  </>
 );
}

export default MoviePage;