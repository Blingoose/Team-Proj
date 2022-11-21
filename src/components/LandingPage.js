import React from "react";
import Button from "./Button";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles["landing-main-container"]}>
      <Button />
      <div></div>
      <p className={styles["game-quote"]}>
        “In this world, wherever there is light – there are also shadows. As
        long as the concept of winners exists, there must also be losers. The
        selfish desire of wanting to maintain peace causes wars and hatred is
        born to protect love.” – Madara
      </p>
    </div>
  );
};

export default LandingPage;
