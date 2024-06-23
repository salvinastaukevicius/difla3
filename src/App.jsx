// src/App.js
import React, { useEffect } from "react";
import MyComponent from "./assets/MyComponent/";
import HomeFlashcards from "./assets/homeFlashcards";
import Minigames from "./assets/minigames"
import Menu from "./assets/menu";

import FlashcardsPage from './assets/flashcardsPage';
import { Routes, Route, HashRouter } from "react-router-dom";
import Hometouse from "./assets/HomeCardToUse";




const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={[<Menu/>,<MyComponent/>,<HomeFlashcards/>,<Minigames/>]} />
      <Route exact path="/flash" element={<FlashcardsPage />} />
    </Routes>


      
    
  );
};


export default App;
