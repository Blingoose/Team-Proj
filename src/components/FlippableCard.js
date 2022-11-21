import "./Flippable-card.css";
import Card from "./card/Card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

function FlippableCard({getFlip,onClick, image}) {
  const [flip, setFlip] = useState(false)
  return (
    <div onClick={onClick} className="flippable-card-container">
      <CSSTransition in={flip} timeout={5000} classNames="flip">
        <Card flip={getFlip(flip)}
        image={image}
          onClick={() => {
            setFlip((v) => !v);
          }}
        />
      </CSSTransition>
    </div>
  );
}

export default FlippableCard;
