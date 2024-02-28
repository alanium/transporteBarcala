import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from "./Horarios.module.css";

function Horarios() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.location}>
          Villa Tesei, Provincia de Buenos Aires
        </p>
        <button className={styles.button}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> Contáctanos
        </button>
        <div className={styles.divisionContainer}></div>
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>NUESTROS HORARIOS</h2>
        <div className={styles.schedule}>
          <p>
            <span className={styles.day}>Lunes a Viernes</span>{" "}
            <span className={styles.time}>6am - 12pm</span>
          </p>
          <p>
            <span className={styles.day}>Sábado a Domingo</span>{" "}
            <span className={styles.time}>6pm - 11pm</span>
          </p>
        </div>
        <div className={styles.divisionContainer}></div>
      </div>
    </div>
  );
}

export default Horarios;
