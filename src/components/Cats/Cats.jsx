import React, { useState } from "react";

function Cats() {
  const [img, setImg] = useState('');
  const handleRes = (e) => {
    setImg(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleRes} />
      <p>
        <img src={`https://http.cat/${img}.jpg`} />
      </p>
    </>
  );
}

export default Cats;
