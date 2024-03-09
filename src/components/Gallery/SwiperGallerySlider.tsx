import sliderOne from "../../assets/Gallery/1.jpg";
import sliderTwo from "../../assets/Gallery/2.jpg";
import SliderThree from "../../assets/Gallery/3.jpg";
import sliderFour from "../../assets/Gallery/4.jpg";
import SliderFive from "../../assets/Gallery/5.jpg";
import sliderSix from "../../assets/Gallery/6.jpg";
import sliderSeven from "../../assets/Gallery/7.jpg";
import sliderEight from "../../assets/Gallery/8.jpg";
import sliderNine from "../../assets/Gallery/9.jpg";
import sliderTen from "../../assets/Gallery/10.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function SwiperGallerySlider() {
  return (
    <section className="px-2">
      <Swiper
        slidesPerView={4}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div>
            <img
              src={sliderOne}
              alt=""
              className="rounded-lg h-[300px] md:min-h-[400px] 2xl:min-h-[500px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={sliderTwo}
              alt=""
              className="rounded-lg h-[300px] md:min-h-[400px] 2xl:min-h-[500px] "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full">
            <img
              src={SliderThree}
              alt=""
              className="rounded-lg h-[300px] md:min-h-[400px] 2xl:min-h-[500px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderFour}
            alt=""
            className="rounded-lg h-[300px] md:min-h-[400px] 2xl:min-h-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={SliderFive}
            alt=""
            className="rounded-lg h-[300px] md:min-h-[400px] 2xl:min-h-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderSix}
            alt=""
            className="rounded-lg h-[300px] md:min-h-[400px] 2xl:min-h-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderSeven}
            alt=""
            className="rounded-lg h-[300px] md:min-h-[400px] 2xl:min-h-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderEight}
            alt=""
            className="rounded-lg h-[300px] md:min-h-[400px] 2xl:min-h-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderNine}
            alt=""
            className="rounded-lg h-[300px] md:min-h-[400px] 2xl:min-h-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderTen}
            alt=""
            className="rounded-lg h-[300px] md:min-h-[400px] 2xl:min-h-[500px]"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
