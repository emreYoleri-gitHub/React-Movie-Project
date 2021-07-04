import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Movie = (props) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    console.log(props);
    let movieID = props.match.url.slice(1);
    let movie = props.movies.find((movie) => movie.imdbID === movieID);
    setMovie(movie);
    console.log(movie);
  }, [props]);
  
  return (
    <div className="d-flex m-3">
      <img src={movie.Poster} alt={movie.Title} height="350" className="rounded-3" />
      <div className="ms-3">

      <h1>{movie.Title}</h1>
      <p>Type : {movie.Type}</p>
      <p>Year : {movie.Year}</p>
      </div>
    
    </div>
  );
};
const mapStateToProps = (state) => {
  const { movies } = state;
  return {
    movies,
  };
};
export default connect(mapStateToProps)(Movie);
