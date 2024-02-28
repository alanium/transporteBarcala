import React from "react";
import styles from "./Body.module.css";

const Body = () => {
  const phoneNumber = "123-456-7890";
  const phoneNumber2 = "44501180";

  const handleContact = () => {
    // Copia el número de teléfono al portapapeles
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        // Abre la aplicación de llamadas por defecto con el número de teléfono
        window.open(`tel:${phoneNumber}`);
      })
      .catch((err) => {
        console.error("Error al copiar el número de teléfono: ", err);
      });
  };
  const handleContact2 = () => {
    // Copia el número de teléfono al portapapeles
    navigator.clipboard
      .writeText(phoneNumber2)
      .then(() => {
        // Abre la aplicación de llamadas por defecto con el número de teléfono
        window.open(`tel:${phoneNumber2}`);
      })
      .catch((err) => {
        console.error("Error al copiar el número de teléfono: ", err);
      });
  };
  
  return (
    <div className={styles.bodyContainer}>
      <h1 className={styles.title}>Empresa De Mudanzas Y Fletes</h1>

      <div className={styles.bttnContainer}>
        <button className={styles.contactButton} onClick={handleContact}>+54 123-456-789</button>
        <p style={{fontSize: "30px", display: "inline-block"}}>o</p>

        <button className={styles.contactButton} onClick={handleContact2}>4450-1180</button>
      </div>

    </div>
  );
};

export default Body;
