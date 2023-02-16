import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faShare } from "@fortawesome/free-solid-svg-icons";
import moviesvg from "./movieclip.svg";
const SearchMovie = () => {
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submited");
  };
  const fetchData = () => {};
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
