// // components/CompanyCarousel.tsx
"use client";


import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/a11y";

type Company = {
  name: string;
  logo: string;
};

interface CompanyCarouselProps {
  companies: Company[];
}

export const CompanyCarousel: React.FC<CompanyCarouselProps> = ({
  companies,
}) => {
  const slides = [...companies, ...companies];

  return (
    <div aria-label="Companies I've worked with" className="">
      <Swiper
        modules={[Autoplay, A11y]}
        loop={true}
        slidesPerView={2}
        spaceBetween={24}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={4000}
        a11y={{ enabled: true }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 24 },
          768: { slidesPerView: 4, spaceBetween: 28 },
          1024: { slidesPerView: 5, spaceBetween: 32 },
          1280: { slidesPerView: 6, spaceBetween: 36 },
        }}
        className=""
      >
        {slides.map((company, index) => (
          <SwiperSlide
            key={`${company.name}-${index}`}
            className="flex items-center justify-center"
          >
            <div className="flex items-center justify-center px-4 py-6">
              <Image
                src={company.logo}
                alt={company.name}
                width={160}
                height={48}
                loading="lazy"
                className="max-h-12 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CompanyCarousel;
