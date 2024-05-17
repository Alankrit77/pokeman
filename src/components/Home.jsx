import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigateToPokemon = () => {
    navigate("/pokemon");
  };

  return (
    <div className={`image-page ${darkMode ? "dark-mode" : ""}`}>
      <button className="toggle-button" onClick={toggleDarkMode}>
        {`${darkMode ? "Light Mode " : "Dark Mode"} `}
      </button>
      <div className="card">
        <h1>How to play PokéSwipe</h1>
        <div className="instructions">
          <p>Pokémon Appear One at a Time</p>
          <p>Choose "Like" or "Dislike"</p>
          <p>Build Your Favorite Team</p>
        </div>
        <button className="navigate-button" onClick={navigateToPokemon}>
          Let's Go!
        </button>
      </div>
    </div>
  );
};

export default Home;
