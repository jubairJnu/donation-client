import CommonHeader from "@/pages/component/utils/CommonHeader";
import Container from "@/pages/component/utils/Container";
import img1 from "../../../assets/gallery/img-1.jpeg";
import img2 from "../../../assets/gallery/img-3.jpg";
import img3 from "../../../assets/gallery/img-4.jpg";
import img4 from "../../../assets/gallery/img-5.jpg";
import img5 from "../../../assets/gallery/img-6.jpg";
import img6 from "../../../assets/gallery/img-7.jpg";
import img7 from "../../../assets/gallery/img-8.jpg";
import img8 from "../../../assets/gallery/img-9.jpg";
import img9 from "../../../assets/gallery/img-10.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Gallery = () => {
  return (
    <Container>
      <CommonHeader text="Gallery" />

      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={4}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          speed={1800}
          autoplay={{ delay: 4000 }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default Gallery;
