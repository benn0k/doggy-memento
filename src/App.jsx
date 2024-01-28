import { useState, useEffect } from 'react';
import shuffle from './utilities/shuffle';
import Card from './components/Card';

import './App.css';

function App() {
  const [cards, setCards] = useState(shuffle); // creates card array from assets
  const [pickOne, setPickOne] = useState(null); // First Card
  const [pickTwo, setPickTwo] = useState(null); // Second Card
  const [disabled, setDisabled] = useState(null); // Delay handler
  const [wins, setWins] = useState(0); // Delay handler

  // Handle card selection
  const handleClick = (card) => {
    //if clicking is not disabled
    if (!disabled) {
      // if pickOne is set, setPickTwo, otherwise setPickOne
      pickOne ? setPickTwo(card) : setPickOne(card);
    }
  };

  return (
    <>
      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;
          return <Card key={id} image={image} selected={false} />;
        })}
      </div>
    </>
  );
}

export default App;
