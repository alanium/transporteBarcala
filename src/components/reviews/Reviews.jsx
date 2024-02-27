import React, { useState, useEffect } from "react";
import styles from "./Reviews.module.css";
import imagen from "./assets/image.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";

const Reviews = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    const request = {
      placeId: placeId,
      fields: ["reviews"],
    };

    const callback = (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setReviews(place.reviews);
      } else {
        console.error("Error fetching reviews:", status);
      }
    };

    service.getDetails(request, callback);
  }, [placeId]);

  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className={styles.parallaxBg}
          data-swiper-parallax="-23%"
        >
          <div className={styles.blackBg}></div>
        </div>

        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className={styles.reviewContainer}>
              <div className={`${styles.card} card`}>
                <div className={`${styles.cardHeader} cardHeader`}>
                  <strong>{review.author_name}</strong>
                  <span className={`${styles.rating} rating`}>
                    {"★".repeat(review.rating)}
                  </span>
                </div>
                <div className={`${styles.cardBody} cardBody`}>
                  {review.text}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
