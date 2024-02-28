// App.js
import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import CalculateDistance from "./components/calculateDistance/CalculateDistance";
import Reviews from "./components/reviews/Reviews";
import GoogleMap from "./components/googleMapWidget/GoogleMapWidget";
import Flota from "./components/flota/NuestraFlota";
import Body from "./components/body/Body";
import Horarios from "./components/horarios/Horarios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ContactButton from "./components/contact/ContactButton";

function App() {
  const [contactModalVisible, setContactModalVisible] = useState(false);

  const openContactModal = () => {
    setContactModalVisible(true);
  };

  const closeContactModal = () => {
    setContactModalVisible(false);
  };

  const handleContactSubmit = (formData) => {
    const phoneNumber = "+5491131486466";
    const message = `Hola, soy ${formData.name}. Mi dirección de origen es ${formData.origin} y mi dirección de destino es ${formData.destination}. ¿Podríamos discutir más detalles sobre el servicio?`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
    setContactModalVisible(false);
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
          <div className="principal-container">
            <div className="background">
              <Header />
              <div>
                <CalculateDistance />
                <button className="bttn" onClick={openContactModal}>
                  Contactar
                </button>
              </div>
              <div>
                <Body />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="white-background">
          <div className="full-screen-container">
            <div className="flota">
              <Flota />
            </div>
            <div className="horarios">
              <Horarios />
            </div>
          </div>
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
      {contactModalVisible && (
        <ContactButton
          buttonText="Enviar"
          title="Contactar"
          onSubmit={handleContactSubmit}
          onClose={closeContactModal}
        />
      )}
    </div>
  );
}

export default App;
