import React, { useState, useEffect } from "react";
import "./MovieList/MovieCard/MovieCard.css";
const MovieDetails = ({ moviesData , match}) => {
 const [movie, setMovie] = useState("");
 
  useEffect(() => {
    setMovie(moviesData.find((el) => el.name === match.params.name));
  }, []);
 

  return (
    <div>

      <h1>{movie.description}</h1>
      <h2>{movie.name} </h2>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

    </div>
  );
};

export default MovieDetails;