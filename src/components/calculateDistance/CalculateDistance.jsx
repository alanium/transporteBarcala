import React, { useState } from 'react';
import styles from './CalculateDistance.module.css';

function CalculateDistance() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  // Coordenadas geográficas predefinidas
  const originCoordinates = { lat: -34.6269269, lon: -58.6431527 }; // Coordenadas de un lugar en Buenos Aires
  const destinationCoordinates = { lat: -34.6154321, lon: -58.4598423 }; // Coordenadas de otro lugar en Buenos Aires

  // Función para calcular la distancia entre dos puntos geográficos utilizando la fórmula de Haversine
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = (lat2 - lat1) * (Math.PI / 180); // Diferencia de latitud en radianes
    const dLon = (lon2 - lon1) * (Math.PI / 180); // Diferencia de longitud en radianes
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distancia en kilómetros
    return distance.toFixed(2); // Redondeamos la distancia a dos decimales
  };

  const handleCalculateDistance = () => {
    if (!origin || !destination) {
      alert('Por favor ingrese tanto el origen como el destino');
      return;
    }

    // Calcular la distancia utilizando la fórmula de Haversine
    const calculatedDistance = calculateDistance(
      originCoordinates.lat,
      originCoordinates.lon,
      destinationCoordinates.lat,
      destinationCoordinates.lon
    );

    setDistance(`${calculatedDistance} km`);
  };

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div>
      {popupVisible && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h2>Calcular Distancia</h2>
            <label>Origen 
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className={styles.input}
            />
            </label>
            

            <label>Destino 
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className={styles.input}
            />
            </label>
            
            <button onClick={handleCalculateDistance} className={styles.calculateButton}>Calcular</button>
            <button onClick={togglePopup} className={styles.calculateButton}>Cerrar</button>
            {distance && <p>La distancia es: {distance}</p>}
          </div>
        </div>
      )}
      <button onClick={togglePopup} className={styles.bttn}>
        Calcular distancia
      </button>
    </div>
  );
}

export default CalculateDistance;
