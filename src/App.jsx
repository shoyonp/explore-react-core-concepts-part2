import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import Users from "./Users";
import Frindes from "./Friends";

function App() {
  function handleClick() {
    alert("button clicked");
  }

  const handleCLick2 = () => {
    alert("button 2 clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>React Core Concepts</h3>

      <Frindes></Frindes>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleCLick2}>CLick2</button>
      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        third
      </button>
      <button onClick={() => addToFive(3)}>four</button>
    </>
  );
}

export default App;
