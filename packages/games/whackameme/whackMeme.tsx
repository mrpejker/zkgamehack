import React from "react";
import Game from "./Game"; // Import the game logic component

// Main component that is referenced in the config
const WhackMeme: React.FC = () => {
  return (
    <div>
      <h1>Whack-a-Meme</h1>
      <Game /> {/* Render the game here */}
    </div>
  );
};

export default WhackMeme;