import React from "react";
import styles from "./Header.module.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Header() {
  const phoneNumber = '123-456-7890'; // Número de teléfono del propietario

  const handleContact = () => {
    // Aquí irá la lógica para abrir una aplicación de mensajería con el número de teléfono del propietario
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className={styles.header}>
      <div className="left">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className={styles.icon} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className={styles.icon} />
        </a>
      </div>
      <div className={styles.right}>
        <button className={styles.contactButton} onClick={handleContact}>
          {phoneNumber}
        </button>
      </div>
    </div>
  );
}

export default Header;
