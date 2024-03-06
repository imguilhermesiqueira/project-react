import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import './MovieCard.css'

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p> 
        <FaStar /> {movie.vote_average}
      </p>
      <div className="div-details">
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
      </div>
    </div>
  );
};

export default MovieCard;
