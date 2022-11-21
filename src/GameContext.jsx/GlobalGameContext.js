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
                console.dir(data);
                setCardsData(data)
            }catch(error){
                console.log(error);
                setError(error)
            }
        }
        getCards()
    },[])


  return (
    <GameContext.Provider value={{
        cardsData,
        error,
    }}>
        {children}
    </GameContext.Provider>
  )
}

export default GlobalGameContext