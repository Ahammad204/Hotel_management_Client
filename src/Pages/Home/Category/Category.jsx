import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
        <SectionTitle subHeading={"---From 11:00am to 10:00pm---"} heading={"ORDER ONLINE"}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className="w-40 md:w-80 h-32 md:h-[410px]" src={img1} alt="" />
            <h3 className="text-white font-Cinzel -mt-16 mb-20 uppercase text-center text-xl md:text-4xl">
                Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-40 md:w-80 h-32 md:h-[410px]" src={img2} alt="" />
            <h3 className="text-white font-Cinzel -mt-16 uppercase text-center text-xl md:text-4xl">Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-40 md:w-80 h-32 md:h-[410px]" src={img3} alt="" />
            <h3 className="text-white font-Cinzel -mt-16 uppercase text-center text-xl md:text-4xl">Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-40 md:w-80 h-32 md:h-[410px]" src={img4} alt="" />
            <h3 className="text-white font-Cinzel -mt-16 uppercase text-center text-xl md:text-4xl">desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-40 md:w-80 h-32 md:h-[410px]" src={img5} alt="" />
            <h3 className="text-white font-Cinzel -mt-16 uppercase text-center text-xl md:text-4xl">Salads</h3>
        </SwiperSlide>
        
       
      </Swiper>
    </section>
  );
};

export default Category;
