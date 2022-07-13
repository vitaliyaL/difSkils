import React, { useState } from "react";
import { Link } from "react-router-dom";

function Validation() {
  const [text, setText] = useState("");
  const [bdcolor, setBdcolor] = useState(false);
  const [value,setValue]=useState('')
  const handleTxt = (e) => {
    setValue(e.target.value)
    if (e.target.value === "") {
      setText("");
      setBdcolor(false);
    } else if (e.target.value !== "admin") {
      setText("Error");
      setBdcolor(true);
    } else {
      setText("");
      setBdcolor(false);
    }
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleTxt}
        style={bdcolor ? { border: "2px solid red" } : {}}
      />
      {value==="admin" ? (
        <Link to="admin">
          <button>ok</button>
        </Link>
      ) : (
        <Link to="notadmin">
          <button>ok</button>
        </Link>
      )}
      <p>{text}</p>
    </div>
  );
}

export default Validation;
