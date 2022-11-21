import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Game from "./components/Game";
import GlobalGameContext from "./GameContext.jsx/GlobalGameContext";
import LandingPage from './components/LandingPage'

function App() {

  return (
    <GlobalGameContext>
      <Router>
        <Routes>
          <Route path={'/'} element={ <LandingPage/>}/>
          <Route path={'/game'} element={ <Game/>}/>
        </Routes>
      </Router>
    </GlobalGameContext>
  );
}

export default App;
