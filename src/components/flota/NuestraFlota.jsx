import React from 'react';
import styles from "./NuestraFlota.module.css"; // Importar estilos CSS utilizando módulos

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

function Flota() {
  return (
    <div className={styles["full-screen-container"]}> {/* Usar estilos CSS mediante el objeto styles */}
      <div className={styles["image-container"]}>
        <img src={image1} alt="Imagen 1" />
      </div>
      <div className={styles["image-container"]}>
        <img src={image2} alt="Imagen 2" />
      </div>
      <div className={styles["image-container"]}>
        <img src={image3} alt="Imagen 3" />
      </div>
    </div>
  );
}

export default Flota;
