import React, { useRef, useEffect } from 'react';
import '../games/game.css';
import { initGame } from '../games/game.js';

export default function HangmanGame() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      initGame(containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="hangman-container">
      <img
        id="hangman-image"
        src="/assets/images/hangman/hangman-0.png"
        alt="Hangman"
      />

      {/* All the placeholders game.js expects: */}
      <div id="word"></div>
      <div id="attempts"></div>
      <div id="letters-guessed"></div>
      <div id="hint"></div>
      <div id="message"></div>

      {/* Hint button */}
      <div>
        <button id="hint-btn">Hint</button>
      </div>

      {/* Full-word guess */}
      <div>
        <input
          id="full-word-input"
          type="text"
          placeholder="Guess the full word"
        />
        <button id="guess-word-btn">Guess Word</button>
      </div>

      {/* New Game */}
      <div>
        <button id="new-game-btn">New Game</button>
      </div>

      {/* Clickable letter bank */}
      <div id="letter-bank"></div>
    </div>
  );
}