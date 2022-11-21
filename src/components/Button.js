import React from "react";
import styles from "../components/Button.module.css";

const Button = ({children, onClick}) => {
  return (
    <div className={styles.container}>
      <button onClick={onClick?onClick:null}>
        <span>{children}</span>
      </button>
    </div>
  );
};

export default Button;
