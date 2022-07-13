import React, { useEffect, useState } from "react";

function Result() {
  const [result, setResult] = useState({});
  const [update, setUpdate]=useState(false)
  useEffect(() => {
    fetch("https://yesno.wtf/api")
      .then((response) => response.json())
      .then((json) => setResult(json));
  }, [update]);
  return (
    <div>
      <button onClick={()=>setUpdate(!update)}>Result</button>
      <p>{result.answer}</p>
      <div>
        <img src={`${result.image}`} alt="" />
      </div>
    </div>
  );
}

export default Result;
