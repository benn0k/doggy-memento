function shuffle() {
  //Create assets array for cards
  const assets = [
    { image: '/assets/griffin_honeysuckle.jpg' },
    { image: '/assets/griffin1.jpg' },
    { image: '/assets/griffin2.jpg' },
    { image: '/assets/griffin3.jpg' },
    { image: '/assets/griffin4.png' },
    { image: '/assets/honeysuckle1.jpg' },
    { image: '/assets/honeysuckle2.jpg' },
    { image: '/assets/honeysuckle3.jpg' },
  ];

  //Spread assets twice to get 16 cards
  return (
    [...assets, ...assets]
      //Mix up cards in array
      .sort(() => Math.random() - 0.05)
      //Add random ID to each card
      .map((card) => ({ ...card, id: Math.random() }))
  );
}

export default shuffle;
