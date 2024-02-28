import React, { useState } from 'react';
import styles from './CalculateDistance.module.css';

function CalculateDistance() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleCalculateDistance = async () => {
    if (!origin || !destination) {
      alert('Por favor ingrese tanto el origen como el destino');
      return;
    }

    try {
      const [originCoordinates, destinationCoordinates] = await Promise.all([
        getCoordinates(origin),
        getCoordinates(destination)
      ]);

      const calculatedDistance = calculateDistance(
        originCoordinates.lat,
        originCoordinates.lon,
        destinationCoordinates.lat,
        destinationCoordinates.lon
      );

      setDistance(`${calculatedDistance} km`);
    } catch (error) {
      console.error('Error al obtener las coordenadas:', error);
      alert('Error al obtener las coordenadas. Por favor, inténtelo de nuevo.');
    }
  };

  const getCoordinates = async (address) => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyDMFGskIfEG9Xy3hNa0hcTtgL3h-ffdS9E`);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      return { lat, lon: lng };
    } else {
      throw new Error('No se encontraron coordenadas para la dirección proporcionada');
    }
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = (lat2 - lat1) * (Math.PI / 180); // Diferencia de latitud en radianes
    const dLon = (lon2 - lon1) * (Math.PI / 180); // Diferencia de longitud en radianes
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance.toFixed(2);
  };

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div>
      {popupVisible && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h2>Calcular precio por viaje</h2>
            <label>Origen:
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className={styles.input}
            />
            </label>
            

            <label>Destino:
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className={styles.input}
            />
            </label>
            
            <button onClick={handleCalculateDistance} className={styles.calculateButton}>Calcular</button>
            <button onClick={togglePopup} className={styles.calculateButton}>Cerrar</button>
            <p style={{fontSize:"13px"}}>Recuerda, este es solo un estimado, el precio puede no estar sujeto a este calculo.</p>

            {distance && <p>La distancia es: {distance}</p>}
            {distance && <p>El precio por 1 viaje es: ${(parseFloat(distance) * 1000).toFixed(2)}</p>}


          </div>
        </div>
      )}
      <button onClick={togglePopup} className={styles.bttn}>
        Calcular precio
      </button>
    </div>
  );
}

export default CalculateDistance;
