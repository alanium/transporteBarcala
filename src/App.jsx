import React, { useState } from "react";
import "./App.css";

import CalculateDistance from "./components/calculateDistance/CalculateDistance";
import ContactButton from "./components/ContactButton";
import Reviews from "./components/reviews/Reviews";
import GoogleMap from "./components/googleMapWidget/GoogleMapWidget";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function App() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [placeId, setPlaceId] = useState("ChIJ8ZQp-Mu4vJURoCAJDdkRaNg");

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div className="principal-container">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h1>Transporte barcala</h1>
          <div className="content">
            
            <Reviews placeId={placeId} />
            <CalculateDistance />
            <ContactButton />
            <GoogleMap
              latitude={-34.62693224571751}
              longitude={-58.6405821570769}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
