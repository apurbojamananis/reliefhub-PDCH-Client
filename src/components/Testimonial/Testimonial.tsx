import TSlider from "./TSlider";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";

const Testimonial = () => {
  const swiperRef = useRef<SwiperType>();
  return (
    <section className="dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto py-16 py-lg-28 ">
        <div className="pb-10 flex justify-between">
          <div className="">
            <h3 className="mb-5">Testimonial</h3>
            <h2>What Our Community Say</h2>
          </div>
          <div className="items-center hidden mt-12 md:flex justify-end">
            <div onClick={() => swiperRef.current?.slidePrev()}>
              <button
                title="left arrow"
                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            <div onClick={() => swiperRef.current?.slideNext()}>
              <button
                title="right arrow"
                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <TSlider SwiperReference={swiperRef} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
