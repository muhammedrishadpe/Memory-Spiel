// import { useState } from 'react'

import "./App.css";

const gameIcons = [
  "🏝️",
  "🍍",
  "🍹",
  "🥴",
  "💘",
  "🎉",
  "🎁",
  "👗",
  "🪞"
];

function App() {
  return (
    <main>
      <h1>Memory Spiel</h1>
      <div className="container">
        {gameIcons.map((data, index)=>(
          <div className="flip-card" key={index}>
          <div className="flip-card-inner">
            <div className="flip-card-front" />
            <div className="flip-card-back">
            🤸‍♂️
            </div>
          </div>
        </div>
        ))}
        
      </div>
    </main>
  );
}

export default App;
