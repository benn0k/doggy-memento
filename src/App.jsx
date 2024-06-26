import { useState, useEffect } from 'react';
import shuffle from './utilities/shuffle';
import Card from './components/Card';

import './App.css';

function App() {
  const [cards, setCards] = useState(shuffle); // creates card array from assets
  const [pickOne, setPickOne] = useState(null); // First Card
  const [pickTwo, setPickTwo] = useState(null); // Second Card
  const [disabled, setDisabled] = useState(false); // Delay handler
  const [wins, setWins] = useState(0); // Delay handler

  // Handle card selection
  const handleClick = (card) => {
    //if clicking is not disabled
    console.log('card clicked');
    if (!disabled) {
      // if pickOne is set, setPickTwo, otherwise setPickOne
      pickOne ? setPickTwo(card) : setPickOne(card);
    }
  };

  // Runs after 2 picks -> resets state + turns off disabled
  const handleTurn = () => {
    setPickOne(null);
    setPickTwo(null);
    setDisabled(false);
  };
  //used for selection and match handling
  useEffect(() => {
    let pickTimer;

    //Two cards have been clicked
    if (pickOne && pickTwo) {
      // Check if the cards are the same
      if (pickOne.image === pickTwo.image) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === pickOne.image) {
              // Update card to reflect match
              return { ...card, matched: true };
            } else {
              // If no match, return card
              return card;
            }
          });
        });
        //run handle turn after logic
        handleTurn();
      } else {
        // Prevent new selections until after delay
        setDisabled(true);
        // add delay between selections
        pickTimer = setTimeout(() => {
          handleTurn();
        }, 1000);
      }
    }

    // Teardown logic - removes clearTimeout to stop any potential timeout conflicts
    return () => {
      clearTimeout(pickTimer);
    };
  }, [cards, pickOne, pickTwo]);

  // If player has found all matches, handle accordingly
  useEffect(() => {
    const checkWin = cards.filter((card) => !card.matched);

    // All matches made, handle win counters
    if (cards.length && checkWin.length < 1) {
      console.log('You win!');
      setWins(wins + 1);
      handleTurn();
      setCards(shuffle);
    }
  }, [cards, wins]);

  // app
  return (
    <>
      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;
          return (
            <Card
              key={id}
              image={image}
              selected={card === pickOne || card === pickTwo || matched}
              onClick={() => handleClick(card)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
