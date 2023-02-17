import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ListOfMovies = ({ searchResult }) => {
  if (searchResult.length > 0)
    return (
      <div className="list-of-movies">
        <div>
          <ul>
            {searchResult.map((item, index) => (
              <li key={index}>
                <img
                  src={item.Poster}
                  alt={item.Title}
                  className="poster-img"
                />
                <div>
                  <h2 className="movie-title">
                    {item.Title}{" "}
                    <span>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="star-icon"
                        color="#FFDF00"
                      />
                    </span>
                  </h2>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  else return;
};

export default ListOfMovies;
