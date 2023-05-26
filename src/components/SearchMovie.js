import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import moviesvg from "./movieclip.svg";
import ListOfMovies from "./ListOfMovies";
import { UserContext } from "./ContextProvider";

const SearchMovie = () => {
  const [error, setError] = useState("");
  const { setList, list, search, setSearch } = useContext(UserContext);
  const fetchData = async (searcher) => {
    setList([]);
    let url = `https://www.omdbapi.com/?s=${searcher}&apikey=f0d64179`;
    const data = fetch(url, {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => {
        setError("");
        if (res.Error === "Movie not found!")
          setError(
            "Unable to find what you are looking for please try another search"
          );
        if (res.Response === "True") {
          res.Search.map((elem) => {
            return getDetail(elem.imdbID);
          });
        }
      })
      .catch((e) => setError("unable to connect please check your Internet!"));
    return data;
  };
  const getDetail = async (data) => {
    let detail;
    let url = `https://www.omdbapi.com/?i=${data}&apikey=f0d64179`;
    const result = await fetch(url);
    const result_json = await result.json();
    setList((r) => [...r, result_json]);
  };
  const readData = async (searcher) => {
    await fetchData(searcher);
  };
  const handleChange = (event) => {
    setSearch(event.target.value);
    readData(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(search);
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
        <ListOfMovies searchResult={list} />
      </div>
      {error ? (
        <p
          className="not-found-error"
          style={{
            textAlign: "center",
            margin: "200px auto 0",
            color: "#d5d5d5",
            fontSize: "20px",
            maxWidth: "450px",
          }}
        >
          {error}
        </p>
      ) : (
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
      )}
    </div>
  );
};

export default SearchMovie;
