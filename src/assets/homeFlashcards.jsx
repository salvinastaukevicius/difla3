// src/MyComponent.js
import React from 'react';
import arrowOrangeRight from './images/arrowOrangeRight.svg';
import speakerOrange from './images/orangeSpeaker.svg';
import './homeFlashcards.css'
import NavigateButton from "./NavigateToFlashcards";


const HomeFlashcards = () => {
  return (
    <div id='blueColor'>
    <p id='titleFlashcards'>Flashcards</p>

    <section id='buttonSeeAll'>
        <p id='buttonSeeAllText'>Bekijk alles</p>
        <img id='arrowOrangeRight' src={arrowOrangeRight} />
    </section>

    <section id='cardSection'>
    <div id='card'>
    <p id='cardLetter'>a</p>
    <img id='speakerIcon' src={speakerOrange}/>
    <NavigateButton />
    </div>
    <div id='card'>
    <p id='cardLetter'>e</p>
    <img id='speakerIcon' src={speakerOrange}/>
    <NavigateButton />
    </div>
    <div id='card'>
    <p id='cardLetter'>i</p>
    <img id='speakerIcon' src={speakerOrange}/>
    <NavigateButton />
    </div>
    <div id='card'>
    <p id='cardLetter'>aa</p>
    <img id='speakerIcon' src={speakerOrange}/>
    <NavigateButton />
    </div>
    <div id='card'>
    <p id='cardLetter'>ee</p>
    <img id='speakerIcon' src={speakerOrange}/>
    <NavigateButton />
    </div>
    <div id='card'>
    <p id='cardLetter'>uu</p>
    <img id='speakerIcon' src={speakerOrange}/>
    <NavigateButton />
    </div>
    </section>

    </div>

  );
};

export default HomeFlashcards;
