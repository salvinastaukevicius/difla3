// src/App.js
import React, { useEffect } from "react";
import MyComponent from "./assets/MyComponent/";
import HomeFlashcards from "./assets/homeFlashcards";
// import Minigames from "./minigames";
import Menu from "./assets/menu";
// import './app.css'




const App = () => {
  return (
    <div className="App">
      <Menu />
      <MyComponent />
      <HomeFlashcards />
      {/* <Minigames /> */}
      
    </div>
  );
};


export default App;
