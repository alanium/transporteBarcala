import React from "react";
import "./App.css";

import Header from "./components/header/Header";
import CalculateDistance from "./components/calculateDistance/CalculateDistance";
import ContactButton from "./components/ContactButton";
import Reviews from "./components/reviews/Reviews";
import GoogleMap from "./components/googleMapWidget/GoogleMapWidget";
import Flota from "./components/flota/NuestraFlota";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function App() {
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
          <div className="principal-container">
            <Header />
            <div>
              <CalculateDistance />
              <ContactButton />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <Flota />
        </SwiperSlide>

        <SwiperSlide>
          <GoogleMap
            latitude={-34.62693224571751}
            longitude={-58.6405821570769}
          />
          <Reviews placeId={"ChIJ8ZQp-Mu4vJURoCAJDdkRaNg"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
