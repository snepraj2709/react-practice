import "./styles.css";
import React, { useState } from "react";
// var userName = prompt("give me your name");

export default function App() {
  var [counter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    counter = counter + 1;
    setLikeCounter(counter);
  }

  // console.log("Clicked", counter);

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "blue" }}>Welcome to Emogi interpreter</h1>
      <button onClick={likeClickHandler}> Like </button>
      {counter}
    </div>
  );
}
