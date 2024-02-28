import React, { useState } from 'react';
import styles from './CalculateDistance.module.css';

function CalculateDistance() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [distance, setDistance] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false); // Estado para controlar la visibilidad del popup


  // Localidades con sus coordenadas geográficas (latitud y longitud)
  const locations = [
    { name: 'Boulogne', lat: -34.4881, lon: -58.5498 },
    { name: 'Ballester', lat: -34.5456, lon: -58.5547 },
    { name: 'San Martín', lat: -34.5734, lon: -58.5382 },
    { name: 'San Isidro', lat: -34.4747, lon: -58.5253 },
    // Puedes agregar más localidades de Buenos Aires según sea necesario
  ];
  
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
    if (!selectedLocation) {
      alert('Por favor seleccione una ubicación');
      return;
    }

    // Ubicación predefinida (por ejemplo, latitud y longitud de una ubicación específica)
    const predefinedLocation = { lat: -34.6269269, lon: -58.6431527 };

    // Obtener las coordenadas geográficas de la localidad seleccionada por el usuario
    const location = locations.find(loc => loc.name === selectedLocation);

    // Calcular la distancia utilizando la fórmula de Haversine
    const calculatedDistance = calculateDistance(location.lat, location.lon, predefinedLocation.lat, predefinedLocation.lon);

    // Actualizar el estado de 'distance' con la distancia calculada
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
            <select
              value={selectedLocation}
              onChange={e => setSelectedLocation(e.target.value)}
              className={styles.select}
            >
              <option value="">Seleccione una localidad</option>
              {locations.map(location => (
                <option key={location.name} value={location.name}>{location.name}</option>
              ))}
            </select>
            <button onClick={handleCalculateDistance} className={styles.calculateButton}>Calcular</button>
            <button onClick={togglePopup} className={styles.calculateButton}>Cerrar</button>
            {distance && <p>La distancia es: {distance}</p>}
          </div>
        </div>
      )}
      <button 
      onClick={togglePopup}
      className={styles.bttn}
      >
        Calcular distancia
        </button>
    </div>
  );
}

export default CalculateDistance;
