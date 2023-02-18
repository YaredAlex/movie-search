import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faShare } from "@fortawesome/free-solid-svg-icons";
import moviesvg from "./movieclip.svg";
import ListOfMovies from "./ListOfMovies";

const SearchMovie = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovies] = useState([]);
  const [error, setError] = useState("");
  const fetchData = (searcher) => {
    let url = `http://www.omdbapi.com/?i=tt3896198&s=${searcher}&apikey=f0d64179`;
    fetch(url, {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => {
        setError("");
        if (res.Response === "True") setMovies(res.Search);
      })
      .catch((e) => setError("unable to connect please check your Internet!"));
  };
  const handleChange = (event) => {
    setSearch(event.target.value);
    fetchData(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
    console.log(movie);
  };

  return (
    <div>
      <div className="form-wrraper">
        <form onSubmit={handleSubmit} className="search-form">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            color="#C1C0C0"
            className="maginfy-icon"
          />
          <input
            type="text"
            placeholder="Search for a movie"
            name="moviesearcher"
            onChange={handleChange}
            value={search}
          />
          <button className="submit-button">Search</button>
        </form>
        <ListOfMovies searchResult={movie} />
      </div>
      {error ? <p style={{ textAlign: "center" }}>{error}</p> : ""}
      <div className="movie-svg-container">
        <img src={moviesvg} alt="alt" className="movie-svg" />
        <p
          style={{
            textAlign: "center",
            color: "#d5d5d5",
            fontSize: "20px",
          }}
        >
          Start exploring
        </p>
      </div>
    </div>
  );
};

export default SearchMovie;
