// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./TStyles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function TSlider({ SwiperReference }: any) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onBeforeInit={(swiper) => {
          SwiperReference.current = swiper;
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full p-8 bg-[#E3F5F5] rounded-md shadow-sm min-h-[450px] lg:min-h-[350px]">
            <p className="leading-loose text-gray-500 text-left ">
              “ I've been involved in disaster response for decades, and I can
              say with confidence that this platform is a game-changer. It
              simplifies logistics and ensures that resources are distributed
              where they're needed most. ”
            </p>

            <div className="flex items-center mt-6 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 text-left">
                  Robert John
                </h1>
                <span className="text-sm text-gray-500 text-left">
                  Disaster Relief Coordinator
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full p-8 bg-[#E3F5F5] rounded-md shadow-sm min-h-[450px] lg:min-h-[350px]">
            <p className="leading-loose text-gray-500 text-left ">
              “ As a healthcare provider, I've seen firsthand the chaos that
              ensues after a disaster. Thanks to this platform, we were able to
              efficiently manage our medical supplies and provide crucial care
              to those affected. ”
            </p>

            <div className="flex items-center mt-6 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 text-left ">
                  {" "}
                  Dr. Jeny Doe
                </h1>
                <span className="text-sm text-gray-500 text-left">
                  Doctor at ABC hospital
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full p-8 bg-[#E3F5F5] rounded-md shadow-sm min-h-[450px] lg:min-h-[350px]">
            <p className="leading-loose text-gray-500 text-left ">
              “ I volunteered with relief efforts in the aftermath of a recent
              disaster, and this platform was a game-changer. It enabled us to
              coordinate our efforts seamlessly and ensure that resources
              reached those who needed them most. ”
            </p>

            <div className="flex items-center mt-6 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 text-left ">
                  Mia Brown
                </h1>
                <span className="text-sm text-gray-500 text-left">
                  Marketing Manager at ReliefHub
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full p-8 bg-[#E3F5F5] rounded-md shadow-sm min-h-[450px] lg:min-h-[350px]">
            <p className="leading-loose text-gray-500 text-left ">
              “ Volunteering with this platform gave me a sense of purpose in
              the aftermath of a disaster. Knowing that I was part of a
              coordinated effort to support our community's health brought me
              hope and inspiration. ”
            </p>

            <div className="flex items-center mt-6 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 text-left ">
                  Michael Chen
                </h1>
                <span className="text-sm text-gray-500 text-left">
                  Leader of Volunteer
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full p-8 bg-[#E3F5F5] rounded-md shadow-sm min-h-[450px] lg:min-h-[350px]">
            <p className="leading-loose text-gray-500 text-left ">
              “ During a time of crisis, every second counts. This platform
              helped us save precious time by streamlining the distribution of
              medical supplies, allowing us to focus on delivering essential
              care to our community. ”
            </p>

            <div className="flex items-center mt-6 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 h-14"
                src="https://randomuser.me/api/portraits/thumb/men/35.jpg"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 text-left ">
                  Mark Thompson
                </h1>
                <span className="text-sm text-gray-500 text-left">
                  Emergency Response Coordinator
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full p-8 bg-[#E3F5F5] rounded-md shadow-sm min-h-[450px] lg:min-h-[350px]">
            <p className="leading-loose text-gray-500 text-left ">
              “ Thanks to this platform, we were able to avoid the confusion and
              inefficiency that often plague post-disaster relief efforts. Their
              technology is a vital tool for any community preparing for or
              recovering from a crisis. ”
            </p>

            <div className="flex items-center mt-6 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 h-14"
                src="https://randomuser.me/api/portraits/thumb/men/29.jpg"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 text-left">
                  David Martinez
                </h1>
                <span className="text-sm text-gray-500 text-left">
                  Public Health Officer
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
