import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const logos = [
  "/partners/1.png",
  "/partners/2.png",
  "/partners/3.png",
  "/partners/4.png",
  "/partners/5.png",
  "/partners/6.png",
];

const TrustedBySection = () => {
  return (
    <div className="bg-gray-900 py-10 text-center">
      <h2 className="text-3xl font-semibold text-indigo-400 mb-8">
        Trusted by Industry Leaders
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }} // ⏩ Faster Scrolling
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="px-6"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-gray-800 p-4 rounded-xl shadow-md flex items-center justify-center h-24 w-32">
              <img src={logo} alt="Trusted company logo" className="h-16 w-auto object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrustedBySection;
