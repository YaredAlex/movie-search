import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faShare } from "@fortawesome/free-solid-svg-icons";
import moviesvg from "./movieclip.svg";
import ListOfMovies from "./ListOfMovies";

const SearchMovie = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovies] = useState([]);
  const fetchData = () => {
    let url = `http://www.omdbapi.com/?s=${search}&apikey=f0d64179`;
    fetch(url, {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.Response === "True") setMovies(res.Search);
      })
      .catch((e) => console.log(e));
  };
  const handleChange = (event) => {
    setSearch(event.target.value);
    fetchData();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
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
  );
};

export default SearchMovie;