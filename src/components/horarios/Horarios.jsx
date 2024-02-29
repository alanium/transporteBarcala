import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from "./Horarios.module.css";
import ContactButton from "../contact/ContactButton";



function Horarios() {
  const [contactModalVisible, setContactModalVisible] = useState(false);

  const openContactModal = () => {
    setContactModalVisible(true);
  };

  const closeContactModal = () => {
    setContactModalVisible(false);
  };

  const handleContactSubmit = (formData) => {
    const phoneNumber = '+5491131486380';
    const message = `Hola, soy ${formData.name}. Mi dirección de origen es ${formData.origin} y mi dirección de destino es ${formData.destination}. ¿Podríamos discutir más detalles sobre el servicio?`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    setContactModalVisible(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.location}>
          Villa Tesei, Provincia de Buenos Aires
        </p>

        <button className={styles.button} onClick={openContactModal}>
          <FontAwesomeIcon 
          icon={faEnvelope} 
          className={styles.icon} 
          /> 
        </button>
        {contactModalVisible && (
        <ContactButton
          buttonText="Enviar"
          title="Contactar"
          onSubmit={handleContactSubmit}
          onClose={closeContactModal}
        />
      )}

        <div className={styles.divisionContainer}></div>
      </div>
      <div className={styles.right}>
          <p className={styles.schedule}>
          <h2 className={styles.title}>Nuestros Horarios</h2>
            <span className={styles.day}>Lunes a Viernes</span>{" "}
            <span className={styles.time}>6am - 18pm</span>
            <div className={styles.divider}></div>
            <span className={styles.day}>Sábado a Domingo</span>{" "}
            <span className={styles.time}>6am - 18pm</span>            
          </p>
        <div className={styles.divisionContainer}></div>
      </div>
    </div>
  );
}

export default Horarios;
