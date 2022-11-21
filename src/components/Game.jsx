


import React from 'react'
import { useState } from 'react'
import './game.css'
import { Timer } from './Timer'

function Game() {

    const [flipped,setFlipped] = useState(false)
  return (
    <div className="fullPageContainer">
        <h1 className="narutoGameTitle">
          <span>Naruto</span> Ninjutso Card Game
        </h1>
      <div className="game-ui d-flex a-center">
        <div className="img-container">
          <img className="img-card" src="Images/Uchiha.jpg" alt="card" />
          <img className="img-card" src="Images/Uchiha.jpg" alt="card" />
          <img className="img-card" src="Images/Uchiha.jpg" alt="card" />
          <img className="img-card" src="Images/Uchiha.jpg" alt="card" />
          <img className="img-card" src="Images/Uchiha.jpg" alt="card" />
          <img className="img-card" src="Images/Uchiha.jpg" alt="card" />
          <img className="img-card" src="Images/Uchiha.jpg" alt="card" />
          <img className="img-card" src="Images/Uchiha.jpg" alt="card" />
          <img className="img-card" src="Images/Uchiha.jpg" alt="card" />
          <img className="img-card" src="Images/Uchiha.jpg" alt="card" />
          <img className="img-card" src="Images/Uchiha.jpg" alt="card" />
          <img className="img-card" src="Images/Uchiha.jpg" alt="card" />
        </div>
        <Timer></Timer>
      </div>
    </div>
  );
}

export default Game;
