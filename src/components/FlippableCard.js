import "./Flippable-card.css";
import Card from "./card/Card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

function FlippableCard() {
  const [flip, setFlip] = useState(true);
  return (
    <div className="flippable-card-container">
      <CSSTransition in={flip} timeout={1100} classNames="flip">
        <Card
          onClick={() => {
            setFlip((v) => !v);
          }}
        />
      </CSSTransition>
    </div>
  );
}

export default FlippableCard;
