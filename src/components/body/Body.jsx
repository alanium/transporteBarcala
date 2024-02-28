import React from "react";
import styles from "./Body.module.css";

const Body = () => {
  return (
    <div className={styles.bodyContainer}>
      <h1 className={styles.title}>Empresa De Mudanzas Y Fletes</h1>
      <button className={styles.contactButton}>+54 123-456-789</button>
    </div>
  );
};

export default Body;
