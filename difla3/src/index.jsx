import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Routes, Route } from 'react-router-dom';
import App from './App'
import FlashcardsPage from './assets/flashcardsPage';
import './index.css';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App />

  
);
  // <HashRouter >
  //   <Routes>
  //   <Route exact path="/" element={<App />} />
  //   <Route exact path="/home" element={<App />} />
  //   </Routes>
      
      /* <Route path="/flashcards" element={<FlashcardsPage />} />
      <Route path="/flashcards" element={<FlashcardsPage />} />     */
    
  // </HashRouter>