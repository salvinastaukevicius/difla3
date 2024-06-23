
import React from 'react';
import blueBorder from './images/minigamesBorder.svg';
import minigameCover1 from './images/minigameCover1.svg'
import minigameCover2 from './images/minigameCover2.svg'
import './minigames.css'

const Minigames = () => {
  return (
    <div id='minigames'>
    <img id='borderBlue' src={blueBorder} />
    <section id='sectionMinigames'>
        <p id='titleMinigames'>Spelletjes</p>
        <section id='minicardCardSection'>
            <div id='minigameCard'>
                <img id='minigameCover' src={minigameCover1} />
                <p id='textCover'>Letter geluiden</p>
                <button id='buttonCover'>Starten</button>
            </div>
            <div id='minigameCard'>
                <img id='minigameCover' src={minigameCover2} />
                <p id='textCover'>Tik op het geluid</p>
                <button id='buttonCover'>Starten</button>
            </div>
            <div id='minigameCard'>
                <img id='minigameCover' src={minigameCover1} />
                <p id='textCover'>Woorden zoektocht</p>
                <button id='buttonCover'>Starten</button>
            </div>
        </section>
    </section>

    </div>

  );
};

export default Minigames;
