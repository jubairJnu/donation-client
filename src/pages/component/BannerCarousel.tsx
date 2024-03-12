import { Swiper, SwiperSlide } from "swiper/react";
import banner from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay } from "swiper/modules";
import TextBanner from "../homes/TextBanner";

const BannerCarousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={1500}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img width="100%" src={banner} alt="" />
          <TextBanner />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
          <TextBanner />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" />
          <TextBanner />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
