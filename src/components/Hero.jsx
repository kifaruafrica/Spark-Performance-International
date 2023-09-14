import React from 'react';
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
  return (
    <div id= "/">
      <>
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
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="" />
          </SwiperSlide>
        </Swiper>
      
      </>

      <style jsx>{`
        .mySwiper {
          height: 90vh; 
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .mySwiper {
            height: 60vh;
          }
        }

        @media (max-width: 480px) {
          .mySwiper {
            height: 40vh; 
          }
        }
        .swiper-button-next{
          border-radius:50%;
          --swiper-navigation-size: 15px;
          color:white;
          background-color:black;
          padding: 20px;
      }
      .swiper-button-prev{
          border-radius:50%;
          --swiper-navigation-size:15px;
          color:white;
          background-color:black;
          padding: 20px;
      
      }
      `}</style>
    </div>
  );
}

export default Hero;
