import React, { use } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ReviewCard from './ReviewCard';

const Reviwes = ({ reviwes }) => {
    const reviwe = use(reviwes);
 
  return (
    <div className="py-12 w-5/12 mx-auto">
      <>
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 30,
            stretch: "50%",
            depth: 200,
            modifier: 1,
            scale0: 0.75,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper "
        >
          {reviwe.map((data) => (
            <SwiperSlide key={data.id}>
              <ReviewCard review={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Reviwes;