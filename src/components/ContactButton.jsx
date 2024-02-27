import React from 'react';

function ContactButton() {
  const phoneNumber = '123-456-7890'; // Número de teléfono del propietario

  const handleContact = () => {
    // Aquí irá la lógica para abrir una aplicación de mensajería con el número de teléfono del propietario
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div>
      <h2>Contactar al Propietario</h2>
      <button onClick={handleContact}>Contactar</button>
    </div>
  );
}

export default ContactButton;
