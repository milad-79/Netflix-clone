import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";

function MovieInformationCom() {
  const getMovie = JSON.parse(localStorage.getItem("movie"));

  return (
    <div
      className="body-poster"
      style={{
        backgroundImage: `url(${getMovie.postter})`,
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Link to="/lists" onClick={()=> localStorage.removeItem('movie')}>
        <div className="back-home">
          <img src="./images/icons/icons8-back-30.png" alt={getMovie.title}/>
        </div>
      </Link>

      <div className="text">
        <h3 className="movie-name">{getMovie.title}</h3>
        <p className="movie-dec">{getMovie.description}</p>
        <p className="movie-maturity">Maturity: {getMovie.maturity}</p>
        <p className="movie-genre">Genretion: {getMovie.genre}</p>
        <button className="movie-btn-more">More</button>
      </div>
    </div>
  );
}

export default React.memo(MovieInformationCom);
