import React from "react";
import "./App.css";

import Header from "./components/header/Header";
import CalculateDistance from "./components/calculateDistance/CalculateDistance";
import ContactButton from "./components/ContactButton";
import Reviews from "./components/reviews/Reviews";
import GoogleMap from "./components/googleMapWidget/GoogleMapWidget";
import Flota from "./components/flota/NuestraFlota";
import Body from "./components/body/Body";
import Horarios from "./components/horarios/Horarios";


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
            <div className="background">
              <Header />
              <div>
                <CalculateDistance />
                <ContactButton />
              </div>
              <div>
                <Body />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="white-background">
          <Flota />
          <Horarios />
          
        </SwiperSlide>

        <SwiperSlide className="white-background">
          <div>
            <Reviews placeId={"ChIJ8ZQp-Mu4vJURoCAJDdkRaNg"} />
            <GoogleMap
              latitude={-34.62693224571751}
              longitude={-58.6405821570769}
            />
            
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
