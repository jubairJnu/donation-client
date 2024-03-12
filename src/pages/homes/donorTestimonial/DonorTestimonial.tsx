import CommonHeader from "@/pages/component/utils/CommonHeader";
import Container from "@/pages/component/utils/Container";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

import review from "../../../assets/Review.json";

const DonorTestimonial = () => {
  return (
    <Container>
      <CommonHeader text="Donor Testimonial" />

      <Swiper
        speed={1200}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper "
        breakpoints={{
          // when window width is >= 640px (sm)
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px (md)
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        autoplay={{ delay: 3000, waitForTransition: true }}
      >
        {review?.map((donorReview, index: number) => (
          <SwiperSlide key={index}>
            <TestimonialCard donorReview={donorReview} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default DonorTestimonial;
