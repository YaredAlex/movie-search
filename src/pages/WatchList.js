import {
  faMinusCircle,
  faPlusCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { UserContext } from "../components/ContextProvider";
import NavigationBar from "../components/NavigationBar";

const WatchList = () => {
  const { data, setData } = useContext(UserContext);
  const handleOnClick = (item) => {
    let result = data.filter(function (element) {
      if (element.Title !== item.Title) return element;
    });
    setData(result);
  };
  return (
    <div>
      {" "}
      <NavigationBar />
      <div className="watch-list-info">
        <p>Your watch list is empty</p>
        <button>
          <FontAwesomeIcon icon={faPlusCircle} />
          Let's add movies
        </button>
      </div>
      <div className="list-of-movies watch-list-of-movies">
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <img src={item.Poster} alt={item.Title} className="poster-img" />
              <div className="right-to-img">
                <span className="title-wrapper">
                  <h2 className="movie-title">{item.Title} </h2>
                  <span>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="star-icon"
                      color="#FFDF00"
                    />
                  </span>
                </span>
                <div
                  className="addto-watchlist"
                  onClick={() => handleOnClick(item)}
                >
                  <FontAwesomeIcon icon={faMinusCircle} className="plus-icon" />
                  <span>remove</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WatchList;
