import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Img1 from '../../assets/IMG_0258.JPG';
import Img2 from '../../assets/IMG_0259.JPG';


import './HeroCarousel.css';

import { Pagination, Autoplay } from 'swiper/modules';


const slides = [
  {
    image: Img1,
  },
  {
    image: Img2,
  },
];

const HeroCarousel = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
        renderBullet: (index, className) =>
          `<span class="${className}">${index + 1}</span>`,
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Pagination, Autoplay]}
      className="heroSwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero-slide"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
