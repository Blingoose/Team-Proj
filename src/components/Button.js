import React from "react";
import styles from "../components/Button.module.css";

const Button = () => {
  return (
    <div class={styles.container}>
      <button>
        <span>Button</span>
      </button>
      {/* <button>
        <span>Button</span>
      </button> */}
    </div>
  );
};

export default Button;
