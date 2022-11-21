


import React from 'react'
import { useState } from 'react'
import './game.css'
import { Timer } from './Timer'
import { useContext } from 'react'
import { GameContext } from '../GameContext.jsx/GlobalGameContext'
import axios from 'axios'

function Game() {
    const {cardsData,setCardsData } = useContext(GameContext)
    const [arr, setArr] = useState([])


    cardsData.map(e=>console.log(e))

    // const [flipped,setFlipped] = useState(false)
    // const [cards,setCards] = useState([])
    const imgArr = ['Hinata', 'Kakashi', 'Nagato', 'Naruto', 'Obito', 'Sasuke']

    async function flipCard(id){

        try{
            const current = cardsData.find((item)=> item.id===id)
            if(!current.flipped){
                const {data} = await axios.put(`https://6373a9b9348e94729912f2b1.mockapi.io/crudMock/cardGame/${id}`,{
                 flipped: true
        })
            // console.dir(data)
            setCardsData(prev=>{
                return prev.map(card=> data.name === card.name? data : card)
            })
            
            
            
            }else{
                const {data} = await axios.put(`https://6373a9b9348e94729912f2b1.mockapi.io/crudMock/cardGame/${id}`,{
                    flipped: false
           })
           setCardsData(prev=>{
            return prev.map(card=> data.name === card.name? data : card)
        })
            }
        }catch(error){
            console.log(error);
            // setError(error)
        }
    }
// console.log(cardsData.id);/
   const randomazier = (array)=>{
    let arr = [...array]
        for (let i = 0; i < array.length; i++) {
            arr.push(array[i])
            
        }
       
         return  arr.map((el,index,array)=>{
            return array[randomMath(arr.length)]
          } )
        
   }

//  cardsData.map(card=>{
//      return card.m
//  })
randomazier(cardsData)
function randomMath(num){
    return Math.floor(Math.random()* num)
}


  return (
    <div className="fullPageContainer">
        <h1 className="narutoGameTitle">
          <span>Naruto</span> Ninjutso Card Game
        </h1>
      <div className="game-ui d-flex a-center">
        <div className="img-container">

            { 
            randomazier(cardsData).map(card=>{

            // card,card
                
            return(
               
                <img id={card.id} onClick={()=>{
                    flipCard(card.id)
                }} className="img-card" src={`Images/${card.flipped? card.name : 'Uchiha'}.jpg`}  alt="card" />
                /* <img id={card.id} onClick={()=>{
                    flipCard(card.id)
                }} className="img-card" src={`Images/${card.flipped? card.name : 'Uchiha'}.jpg`}  alt="card" /> */
                

            )

            

           })
           } 

        </div>
        <Timer></Timer>
        </div>
    </div>
  );
}

export default Game;
