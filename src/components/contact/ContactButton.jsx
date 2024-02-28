import React, { useState } from 'react';
import styles from './ContactButton.module.css';

function ContactButton() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    origin: '',
    destination: ''
  });

  const handleContact = () => {
    setPopupVisible(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '+5491169473198'; // Número de teléfono del propietario
    const message = `Hola, soy ${formData.name}. Mi dirección de origen es ${formData.origin} y mi dirección de destino es ${formData.destination}. ¿Podríamos discutir más detalles sobre el servicio?`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    // Cerrar el popup después de enviar el mensaje
    setPopupVisible(false);
  };

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div>
      {popupVisible && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            
            <h2>Contactar</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label>
                Nombre
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Dirección de origen
                <input
                  type="text"
                  name="origin"
                  value={formData.origin}
                  onChange={handleChange}
                />
              </label>
              <label>
                Dirección de destino
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Enviar</button>
              <button onClick={togglePopup}>Cerrar</button>
            </form>
          </div>
        </div>
      )}
      <button 
        onClick={handleContact}
        className={styles.bttn}
      >
        Contactar
      </button>
    </div>
  );
}

export default ContactButton;
