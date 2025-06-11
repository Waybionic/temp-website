import React from "react";
import Image from "next/image";

export default function Mission() {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center px-6 py-24 bg-pink-100 overflow-x-hidden"
      id="mission"
    >
      <div className="max-w-4xl w-full text-center">
        {/* Mobile layout: header with est2024 image positioned to the right */}
        <div className="relative flex items-center justify-center h-24 mb-8 sm:hidden">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center absolute left-1/2 transform -translate-x-1/2">
            Our Mission
          </h2>
          <div className="absolute right-1">
            <Image
              src="/images/est2024.png"
              alt="Paper Note"
              width={160}
              height={160}
              className="w-28 h-28 object-contain drop-shadow-lg animate-rock"
              unoptimized
            />
          </div>
        </div>

        {/* Non-mobile layout: header only */}
        <h2 className="hidden sm:block text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-8">
          Our Mission
        </h2>

        <div className="relative flex flex-col items-center justify-center">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-4">
            At <strong>WayBionic</strong>, we strive to revolutionize remote
            surgery by developing a bionic arm inspired by the challenges of
            performing medical procedures in space. Our goal is to create
            innovative, reliable, and precise tools that empower both astronauts
            and doctors—whether in orbit or on Earth.
          </p>

          {/* Pencilbionic image for mobile: below and to the right of text */}
          <div className="relative w-full flex justify-end -mt-3 sm:hidden">
            <Image
              src="/images/pencilbionic.png"
              alt="WayBionic Mascot with Pencil"
              width={500}
              height={500}
              className="w-26 h-26 object-contain drop-shadow-lg"
              priority
            />
          </div>

          {/* Est2024 image for non-mobile screens only */}
          <Image
            src="/images/est2024.png"
            alt="Paper Note"
            width={100}
            height={100}
            className="hidden sm:block w-28 h-28 sm:w-45 sm:h-45 md:w-57 md:h-57 object-contain drop-shadow-lg absolute -right-8 bottom-16 -translate-y-1/3 animate-rock lg:bottom-0 lg:-translate-y-1/2"
            priority
          />

          {/* Pencilbionic image for non-mobile screens: positioned absolutely */}
          <Image
            src="/images/pencilbionic.png"
            alt="WayBionic Mascot with Pencil"
            width={500}
            height={500}
            className="hidden sm:block sm:w-40 sm:h-40 md:w-52 md:h-52 object-contain drop-shadow-lg absolute -right-8 bottom-4 translate-y-1/3 lg:bottom-0 lg:translate-y-3/4"
            priority
          />
        </div>
      </div>
    </section>
  );
}
