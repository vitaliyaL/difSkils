import React, { useEffect, useState,useRef } from "react";

function UseEffectExample() {
  const [users, setUsers] = useState([]);
  const textRef=useRef()
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
      
  }, []);
  // return <>{users.map(({name, email, id})=>{
  //   return <p key={id}>{name} - {email}</p>
  // })}</>;
  const handleFocus=()=>{
    textRef.current.focus()
  }
  return (
    <div>
      <button onClick={handleFocus}>btn</button>
      <input type="text" ref={textRef}/>
    </div>
  );
}
export default UseEffectExample;
