const Card = ({ image, selected, onClick }) => {
  return (
    <div className="card">
      <div className={selected && 'selected'}>
        <img alt="" src={image} className="card-face" />

        <img
          alt=""
          className="card-back"
          src={'/assets/card_front.jpg'}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Card;
