import React, { useState, useEffect } from 'react';
import Mole from './Mole';
import generateMoles from './generateMoles';

const Game: React.FC = () => {
  const [moles, setMoles] = useState<boolean[]>(generateMoles()); // Generates 9 moles (boolean array)
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(30); // 30 seconds timer

  // Randomly pop up moles
  useEffect(() => {
    const timer = setInterval(() => {
      setMoles(generateMoles()); // Randomize mole positions every second
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const countdown = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [timeLeft]);

  // Handle mole whack
  const whackMole = () => {
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <div className="game">
      <h1>Whack-a-Mole</h1>
      <div className="score">Score: {score}</div>
      <div className="timer">Time Left: {timeLeft}s</div>

      <div className="mole-grid">
        {moles.map((moleUp, index) => (
          <Mole key={index} moleUp={moleUp} onClick={whackMole} />
        ))}
      </div>

      {timeLeft === 0 && <h2>Game Over! Your score is {score}</h2>}
    </div>
  );
};

export default Game;