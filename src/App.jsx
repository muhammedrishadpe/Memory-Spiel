// import { useState } from 'react'

import { useEffect, useState } from "react";
import "./App.css";

const gameIcons = ["🏝️", "🍍", "🍹", "🥴", "💘", "🎉", "🎁", "👗", "🪞"];

function App() {
  const [pieces, setPices] = useState([]);

  const startGame = () => {
    const dublicateGameIcons = gameIcons.concat(gameIcons);
    const newGameIcons = [];
    while (newGameIcons.length < gameIcons.length * 2) {
      const randomIndex = Math.floor(Math.random() * dublicateGameIcons.length);
      newGameIcons.push({
        emoji: dublicateGameIcons[randomIndex],
        flipped: false,
        solved: false,
        position: newGameIcons.length,
      });
      dublicateGameIcons.splice(randomIndex, 1);
    }

    setPices(newGameIcons);
  };

  useEffect(() => {
    startGame();
  }, []);

  const handleActive = (data) => {
    const flippedData = pieces.filter((data) => data.flipped && !data.solved);
    if (flippedData.length === 2) return;
    const newPieces = pieces.map((piece) => {
      if (piece.position === data.position) {
        piece.flipped = !piece.flipped;
      }
      return piece;
    });

    setPices(newPieces);
  };

  const gameLogicForFlipped = () => {
    const flippedData = pieces.filter((data) => data.flipped && !data.solved);

    if (flippedData.length === 2) {
      setTimeout(() => {
        if (flippedData[0].emoji === flippedData[1].emoji) {
          //Success
          setPices(
            pieces.map((piece) => {
              if (
                piece.position === flippedData[0].position ||
                piece.position === flippedData[1].position
              ) {
                piece.solved = true;
              }
              return piece;
            })
          );
        } else {
          setPices(
            pieces.map((piece) => {
              if (
                piece.position === flippedData[0].position ||
                piece.position === flippedData[1].position
              ) {
                piece.flipped = false;
              }
              return piece;
            })
          );
        }
      }, 800);
    }
  };

  const checkIfGameFinished = () => {
    if (pieces.every((piece) => piece.solved)) {
      alert("Solved");
    } else {
      console.log("Not Solved");
    }
  };

  useEffect(() => {
    gameLogicForFlipped();

    if (pieces.length > 0) {
      checkIfGameFinished();
    }
  }, [pieces]);
  return (
    <main>
      <h1>Memory Spiel</h1>
      <div className="container">
        {pieces.map((data, index) => (
          <div
            className={`flip-card ${
              data.flipped || data.solved ? "active" : ""
            }`}
            key={index}
            onClick={() => handleActive(data)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front" />
              <div className="flip-card-back">{data.emoji}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
