import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [currentActive, setCurrentActive] = useState(0);
  let count = 1;

  const handleNavigation = (event, n) => {
    let element = document.querySelectorAll(".active");
    element.forEach(function (el) {
      el.classList.toggle("active");
    });
    event.target.classList.add("active");
    count = n;
    console.log("is ", count);
  };
  console.log("is ", count);
  return (
    <div className="nav-wrraper">
      NavigationBar
      <div className="hero-section"></div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link
              to={"/"}
              onClick={(event) => handleNavigation(event, 1)}
              className="active"
            >
              Find Your film
            </Link>
          </li>
          <li>
            <Link
              to={"/watch-list"}
              onClick={(event) => handleNavigation(event, 2)}
            >
              My Watchlist
            </Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
