import React from "react";
import { useState } from "react";
import "./game.css";
import { Timer } from "./Timer";
import { useContext } from "react";
import { GameContext } from "../GameContext.jsx/GlobalGameContext";


function Game() {
  const { cardsData, setCardsData } = useContext(GameContext);
  const [pairOfCards, setPairOfCards] = useState([])


  function findPair(card){
    if (pairOfCards.length<2){
        setPairOfCards((prev)=>[...prev,card])
        checkForMatch()
    } 
    else if(pairOfCards.length===2){
        setPairOfCards([])
    }
    console.log(pairOfCards);

    
  }

  function checkForMatch(){
    if (pairOfCards[0]===pairOfCards[1]){
        console.log('Its A match');
    }
  }

  async function flipCard(id) {
    try {
      const current = cardsData.find((item) => item.id === id);
      if (!current.flipped) {
        setCardsData((prev) => {
            return prev.map((card) => { 
              if (card.id===current.id){
              return {...card, flipped:!card.flipped}
            } return card
          }
          );
          });
      } 
    //   else {
    //     setCardsData((prev) => {
    //       return prev.map((card) => { 
    //         if (card.id===current.id){
    //         return {...card, flipped:!card.flipped}
    //       } return card
    //     }
    //     );
    //     });
    //   }
    } catch (error) {
      console.log(error);
      // setError(error)
    }
  }

  return (
    <div className="fullPageContainer">
      <h1 className="narutoGameTitle">
        <span>Naruto</span> Ninjutso Card Game
      </h1>
      <div className="game-ui d-flex a-center">
        <div className="img-container">
          {cardsData.map((card) => {
            // card,card

            return (
              <img
              key={card.id}
                id={card.id}
                onClick={() => {
                    findPair(card.name)
                  flipCard(card.id);
                }}
                className="img-card"
                src={`Images/${card.flipped ? card.name : "Uchiha"}.jpg`}
                alt="card"
              />
            );
          })}
        </div>
        <Timer></Timer>
      </div>
    </div>
  );
}

export default Game;
