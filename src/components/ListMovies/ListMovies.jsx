import React from "react";

function ListMovies({ name, onclick }) {
  return (
    <>
      <p>
        {name}
        <button onClick={onclick}>X</button>
      </p>
    </>
  );
}

export default ListMovies;
