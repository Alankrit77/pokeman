import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pokemon.css";

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [likedPokemon, setLikedPokemon] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [abilityColor, setAbilityColor] = useState("#000000");
  const [typeColor, setTypeColor] = useState("#000000");

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = () => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${
          Math.floor(Math.random() * 809) + 1
        }`
      )
      .then((response) => {
        setPokemon(response.data);
        setAbilityColor(generateRandomColor());
        setTypeColor(generateRandomColor());
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLike = () => {
    setLikedPokemon([...likedPokemon, pokemon]);
    fetchPokemon();
  };

  const handleDislike = () => {
    fetchPokemon();
  };

  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const pokemonImage = pokemon
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`
    : "";

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <header>
        <h1>PokéSwipe</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {" "}
          {`${darkMode ? "Light Mode " : "Dark Mode"} `}
        </button>
      </header>
      <main>
        {pokemon && (
          <div className="pokemon-card">
            <img
              src={pokemonImage}
              alt={pokemon.name}
              className="pokemon-image"
            />
            <h2>{pokemon.name}</h2>
            <div className="ability-box">
              <h3>Abilities:</h3>
              {pokemon.abilities.map((ability) => (
                <div
                  key={ability.ability.name}
                  style={{ backgroundColor: abilityColor }}
                  className="ability-button"
                >
                  {ability.ability.name}
                </div>
              ))}
            </div>
            <div className="type-box">
              <h3>Types:</h3>
              {pokemon.types.map((type) => (
                <div
                  key={type.type.name}
                  style={{ backgroundColor: typeColor }}
                  className="type-button"
                >
                  {type.type.name}
                </div>
              ))}
            </div>
            <div className="buttons">
              <button onClick={handleDislike}>Dislike</button>
              <button onClick={handleLike}>Like</button>
            </div>
          </div>
        )}
        {likedPokemon.length > 0 && (
          <div className={`liked-pokemon ${darkMode ? "dark-mode" : ""}`}>
            <h2>Pokémon you have liked ❤️</h2>
            <ul>
              {likedPokemon.map((pokemon) => (
                <li key={pokemon.id}>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    alt={pokemon.name}
                    className="liked-pokemon-image"
                  />
                  <h3 className="pokemon-name">{pokemon.name}</h3>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}

export default Pokemon;
