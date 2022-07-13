import React, { useState } from "react";
import { films } from "../../constants/films.js";
import ListMovies from "../ListMovies/ListMovies.jsx";
function MoviesCard() {
  const [list, setList] = useState(films);

  const handleChange = (e) => {
    const { value } = e.target;
    setList(films.filter(({ name }) => name.includes(value)));
  };
  const handleDelete = (id1) => {
    setList(list.filter(({ id }) => id !== id1));
  };
  return (
    <>
      {list.map(({ name, id }) => {
        return (
          <ListMovies name={name} key={id} onclick={() => handleDelete(id)} />
        );
      })}
      <input type="text" onChange={handleChange} />
    </>
  );
}

export default MoviesCard;
