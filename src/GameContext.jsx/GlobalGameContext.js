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
                setCardsData(randomazier(data))
            }catch(error){
                console.log(error);
                setError(error)
            }
        }
        getCards()
    },[])

    function randomMath(num){
        return Math.floor(Math.random()* num)
    }

 const randomazier = (array)=>{
    let arr = [...array]
        for (let i = 0; i < array.length; i++) {
            arr.push(array[i])
            
        }
       
         return  arr.map((el,index,array)=>{
            return array[randomMath(arr.length)]
          } )
        
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