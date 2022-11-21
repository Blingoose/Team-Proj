import "./card.css";
import "./flip-transition.css";

function Card({ onClick, flip,image }) {

  const cardstyle = {
    color:'red',
    background: `url(${flip?image:'./Images/Uchiha.jpg'}) center center/cover no-repeat`
  }
  return (
    <div className="card" onClick={onClick}>
      <div style={cardstyle} className="card-back">Back</div>
      <div style={cardstyle} className="card-front">Front</div>
    </div>
  );
}

export default Card;
