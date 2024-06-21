// NewPage.js
import React, {useEffect} from 'react';
import "./flashcardsPage.css"

const FlashcardsPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#A4B8C1'; 
    // document.body.style.width = '2732px';
    // document.body.style.height = '2048px';

    return () => {
      document.body.style.backgroundColor = ''; 
      document.body.style.width = ''; 
      document.body.style.height = '';
    };
  }, []);

  return (
    <div id='size'>
      <section id='sectionKids'>
      <p>Kind zit hier</p>
      </section>

      <section id='sectionParents'>
<p>Ouder zit hier</p>
      </section>
    </div>
  );
};

export default FlashcardsPage;
