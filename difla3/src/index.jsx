import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Routes, Route, HashRouter } from 'react-router-dom';
import App from './App'
import FlashcardsPage from './assets/flashcardsPage';
import './index.css';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/flashcards" element={<FlashcardsPage />} />
    </Routes>
  </HashRouter>
);
