import React from "react";
import styles from "./Header.module.css";
import { FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";
import logo from "../../assets/logo.png";

function Header() {
  const phoneNumber = "123-456-7890";

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

  return (
    <div className={styles.header}>
      <div className="left">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className={styles.icon} />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className={styles.icon} />
        </a>
      </div>
      <img src={logo} alt="Logo de la empresa" className={styles.logoHeader} />

      <div className={styles.right}>
        {window.innerWidth > 768 ? (
          <button className={styles.contactButton} onClick={handleContact}>
            llamar ahora
          </button>
        ) : (
          <button className={styles.IconButton} onClick={handleContact}>
            <FaPhone className={styles.phoneIcon}/>
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
