// src/MyComponent.js
import React from 'react';
import homeBackground from './images/background.jpg';
import blueHome from './images/homeBackground.png'
import iceBlock from './images/ice.png';
import penguinWave from './images/penguin_wave.png'
import iconSpeaker from './images/sound.svg'
import './homeCard.css'

const MyComponent = () => {
  return (
    <div id='base'>

    <div id='container'>
    <img id='homeBackground' src={homeBackground}/>

  <img id='blueHomeBackground' src={blueHome}></img>
  <img id='iceBlock' src={iceBlock}/>
  <img id='penguinHome' src={penguinWave}/>
<section id='sectionGreeting'>
<p id='triangle'></p>
  <p id='rectangleGreeting'>Welcom,<br></br> Klaar om te leren?</p>
  
  <img id='speaker' src={iconSpeaker}/>
</section>
    </div>

  <div id='menu'>

  </div>

    </div>

  );
};

export default MyComponent;
