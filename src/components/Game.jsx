


import React from 'react'
import { useState } from 'react'
import './game.css'
import { Timer } from './Timer'

function Game() {

    // [
    //     {
    //       "name": "Hinata",
    //       "image": "https://i.postimg.cc/mZ8qD1Cv/Hinata.jpg",
    //       "id": "1",
    //       "flipped":false
    //     },
    //     {
    //       "name": "Kakashi",
    //       "image": "https://i.postimg.cc/d3bG19BR/Kakashi.jpg",
    //       "id": "2",
    //       "flipped":false
    //     },
    //     {
    //       "name": "Nagato",
    //       "image": "https://i.postimg.cc/Dzxpx8nV/Nagato.jpg",
    //       "id": "3",
    //       "flipped":false
    //     },
    //     {
    //       "name": "Naruto",
    //       "image": "https://i.postimg.cc/3JQ1Cgm4/Naruto.jpg",
    //       "id": "4",
    //       "flipped":false
    //     },
    //     {
    //       "name": "Obito",
    //       "image": "https://i.postimg.cc/g2YK1mMG/Obito.jpg",
    //       "id": "5",
    //       "flipped":false
    //     },
    //     {
    //       "name": "Sasuke",
    //       "image": "https://i.postimg.cc/j20Hcbw0/Sasuke.jpg",
    //       "id": "6",
    //       "flipped":false
    //     },
    //     {
    //       "name": "Uchiha",
    //       "image": "https://i.postimg.cc/W3rrhH99/Uchiha.jpg",
    //       "id": "7",
    //       "flipped":false
    //     }
    //   ]

    const [cards,setCards] = useState( [
            {name: "Hinata",
            flipped: false,},
            {name: "Kakashi",
            flipped: false,},
            {name: "Nagato",
            flipped: false,},
            {name: "Naruto",
            flipped: false,},
            {name: "Obito",
            flipped: false,},
            {name: "Sasuke",
            flipped: false,},
        ]

    )
    const [flipped,setFlipped] = useState(false)
    const imgArr = ['Hinata', 'Kakashi', 'Nagato', 'Naruto', 'Obito', 'Sasuke']

    const flipCard = ()=>{

        cards.map(card=>{

            if(card.name==='Hinata'){
                setFlipped(true)
            }
            else if(card.name==='Kakashi'){
                setFlipped(true)
            }
            else if(card.name==='Nagato'){
                setFlipped(true)
            }
            else if(card.name==='Naruto'){
                setFlipped(true)
            }
            else if(card.name==='Obito'){
                setFlipped(true)
            }
            else if(card.name==='Sasuke'){
                setFlipped(true)
            }
        })


    }

  return (
    <div className="fullPageContainer">
        <h1 className="narutoGameTitle">
          <span>Naruto</span> Ninjutso Card Game
        </h1>
      <div className="game-ui d-flex a-center">
        <div className="img-container">
          <img onClick={flipCard} className="img-card" src={`Images/${flipped? 'Hinata' : 'Uchiha'}.jpg`} alt="card" />
          <img className="img-card"  src={`Images/${flipped? 'Kakashi' : 'Uchiha'}.jpg`}  alt="card" />
          <img className="img-card" src={`Images/${flipped? 'Nagato' : 'Uchiha'}.jpg`}  alt="card" />
          <img className="img-card" src={`Images/${flipped? 'Naruto' : 'Uchiha'}.jpg`}  alt="card" />
          <img className="img-card" src={`Images/${flipped? 'Obito' : 'Uchiha'}.jpg`}  alt="card" />
          <img className="img-card" src={`Images/${flipped? 'Sasuke' : 'Uchiha'}.jpg`}  alt="card" />
          <img className="img-card" src={`Images/${flipped? 'Hinata' : 'Uchiha'}.jpg`}  alt="card" />
          <img className="img-card" src={`Images/${flipped? 'Kakashi' : 'Uchiha'}.jpg`}  alt="card" />
          <img className="img-card" src={`Images/${flipped? 'Nagato' : 'Uchiha'}.jpg`}  alt="card" />
          <img className="img-card" src={`Images/${flipped? 'Naruto' : 'Uchiha'}.jpg`}  alt="card" />
          <img className="img-card" src={`Images/${flipped? 'Obito' : 'Uchiha'}.jpg`}  alt="card" />
          <img className="img-card" src={`Images/${flipped? 'Sasuke' : 'Uchiha'}.jpg`}  alt="card" />
        </div>
        <Timer></Timer>
        </div>
    </div>
  );
}

export default Game;
