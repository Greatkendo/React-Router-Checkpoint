import MovieCards from "./MovieCards";
import PropTypes from 'prop-types'

function MovieList(props) {

 
 return (
  <>
   <section className="container mx-auto p-4">
    {
     props.movies.map((item) => {
      return(
       <MovieCards
       key={item.movie_id}
       title={item.title}
       posterurl={item.posterurl}
       description={item.description}
       rating={item.rating} />
      );
     })
    } 
   </section>  
  </>
 );
}

export default MovieList;

MovieList.propTypes = {
 movies: PropTypes.array,
}