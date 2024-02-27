import React, { useState } from 'react';
import "./App.css"

import CalculateDistance from './components/calculateDistance/CalculateDistance';
import ContactButton from './components/ContactButton';
import Reviews from './components/reviews/Reviews';
import GoogleMap from './components/googleMapWidget/GoogleMapWidget';

function App() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [placeId, setPlaceId] = useState("ChIJ8ZQp-Mu4vJURoCAJDdkRaNg");

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div className="principal-container">
      <h1>Transporte barcala</h1>
      <div className="content">
        <CalculateDistance />
        <Reviews placeId={placeId} />
        <ContactButton />
        <GoogleMap latitude={-34.62693224571751} longitude={-58.6405821570769} />
        
      </div>
    </div>
  );
}

export default App;
