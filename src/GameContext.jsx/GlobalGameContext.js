import React from 'react'
import { createContext } from 'react'
import { useEffect, useState } from 'react'
import axios  from "axios";

export const GameContext = createContext()

function GlobalGameContext({children}) {
    const [cardsData, setCardsData] = useState([])
    const [error, setError] = useState('')
    useEffect(()=>{
        async function getCards(){
            try{
            const {data} = await axios.get('https://6373a9b9348e94729912f2b1.mockapi.io/crudMock/cardGame')
                setCardsData(randomazier(data))
            }catch(error){
                console.log(error);
                setError(error)
            }
        }
        getCards()
    },[])

 const randomazier = (array)=>{
    let arr = [...array]
           return arr.sort (()=> Math.random() -0.5)
   }



  return (
    <GameContext.Provider value={{
        cardsData,
        setCardsData,
        error,
    }}>
        {children}
    </GameContext.Provider>
  )
}

export default GlobalGameContext