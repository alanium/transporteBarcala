import React, { useState } from 'react';
import "./App.css"

import CalculateDistance from './components/calculateDistance/CalculateDistance';
import ContactButton from './components/ContactButton';
import Reviews from './components/reviews/Reviews';
import Test from './components/test/Testxd';

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
      </div>
    </div>
  );
}

export default App;
