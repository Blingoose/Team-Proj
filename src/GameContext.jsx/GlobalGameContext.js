import React from 'react'
import { createContext } from 'react'

export const GameContext = createContext()

function GlobalGameContext({children}) {
  return (
    <GameContext.Provider value={{
        
    }}>
        {children}
    </GameContext.Provider>
  )
}

export default GlobalGameContext