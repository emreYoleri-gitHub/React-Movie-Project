import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Movies = ({ movies }) => {
  console.log(movies);
  if (typeof movies != "undefined") {
    return (
      <div className="d-flex flex-wrap justify-content-between">
        {movies.map((movie, index) => {
          return (
            <div
              key={index}
              className="mb-1 me-1 p-4 mt-3"
              style={{
                height: "25rem",
                background: "#F0F4F3",
                borderRadius: "10px",
                width: "15rem",
              }}
            >
              <div className="text-center">
                {movie.Title.length > 15 ? (
                  <p>{movie.Title}</p>
                ) : (
                  <h4>{movie.Title}</h4>
                )}
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  height="250"
                  width="200"
                />
                <Link to={`/${movie.imdbID}`}>
                  <button className="btn btn-danger mt-3 mb-3">İncele</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <h2>Arattığınız film'e ulaşmadık. Lütfen farklı bir film giriniz</h2>
    );
  }
};

const mapStateToProps = (state) => {
  const { movies } = state;
  return {
    movies,
  };
};

export default connect(mapStateToProps)(Movies);
