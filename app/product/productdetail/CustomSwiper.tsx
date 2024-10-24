"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useDarkMode } from "@/context/darkmode";
import { ProductGet } from "@/types/Api";

const images = [
  "/swatch.png",
  "/swatchnoire.png",
  "/swatchrose.png",
  "/swatchwhite.png",
];

const CustomSwiper = ({ product }: any) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const { isDarkMode } = useDarkMode();
  let [isActive, setisActive] = useState(0);
  const productData = product as ProductGet;
  console.log("swiper===>", productData?.description);
  useEffect(() => {
    if (isActive > productData?.image.length - 1) setisActive(0);
  }, [isActive]);

  const myObject = { "--swiper-navigation-size": "16px" } as {
    [key: string]: string;
  };

  return (
    <div className=" xl:max-h-[600px]   xl:w-full w-[50%]  flex-1 xl:px-10 max-xl:px-2  py-8">
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        navigation={true}
        style={myObject}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className={`mySwiper2  xl:h-[80%]  max-xl:w-[90%] max-sm:w-full h-[80%]  max-sm:aspect-1   rounded-2xl ${
          isDarkMode ? " bg-[#F3F6F8]" : " bg-[#2B2E31]"
        }`}
        onSlideChange={(swiper) => {
          setisActive(swiper.realIndex);
        }}
      >
        {productData?.image.map((item: string, indexe: number) => (
          <SwiperSlide
            className="justify-center relative flex  w-[60%] items-center "
            key={item}
          >
            <img
              src={`/uploads/${item}`}
              className=" absolute left-[50%] top-[50%] h-[90%]   -translate-x-[50%] translate-y-[-50%] object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop={true}
        spaceBetween={10}
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper max-xl:h-[30%]   mt-4 flex justify-around items-center"
      >
        {productData?.image.map((item: string, indexe: number) => (
          <SwiperSlide
            key={item}
            className={` ${
              isActive === indexe ? "opacity-100" : "opacity-50"
            }   `}
          >
            <img
              src={`/uploads/${item}`}
              className="w-full h-24 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
