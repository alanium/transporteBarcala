// ContactButton.js
import React, { useState } from 'react';
import styles from './ContactButton.module.css';

function ContactButton({ buttonText, title, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    origin: '',
    destination: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <h2>{title}</h2>
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
          <button type="submit">{buttonText}</button>
          <button onClick={onClose}>Cerrar</button>
        </form>
      </div>
    </div>
  );
}

export default ContactButton;
