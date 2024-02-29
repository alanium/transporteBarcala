import React, { useRef, useState } from 'react';
import styles from "./NuestraFlota.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

function Flota() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className={styles["full-screen-container"]}>
      <h1 className={styles.title}>Explora Nuestra Flota</h1>

      <div className={styles.divider}></div>

      <div className={styles.swiperContainer}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className={`${styles.mySwiper} ${styles["my-swiper"]}`}
        >
          <SwiperSlide>
            <div className={styles["image-container"]}>
              <img src={image1} alt="Imagen 1" className={styles.image} />
              <p>Ford F-100</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles["image-container"]}>
              <img src={image2} alt="Imagen 2" className={styles.image} />
              <p>Ford F-100</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles["image-container"]}>
              <img src={image3} alt="Imagen 3" className={styles.image} />
              <p>Ford F-100</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles["image-container"]}>
              <img src={image4} alt="Imagen 4" className={styles.image} />
              <p>Ford F-100</p>
            </div>
          </SwiperSlide>
          <div className={styles["autoplay-progress"]} slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle} className={styles.progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent} className={styles.progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Flota;
