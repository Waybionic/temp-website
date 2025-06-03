import React from "react";
import Image from "next/image";

export default function Mission() {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center px-6 py-24 bg-pink-100"
      id="mission"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-8">
          Our Mission
        </h2>
        <div className="relative flex flex-col items-center justify-center">
          <Image
            src="/images/est2024.png"
            alt="Paper Note"
            width={100}
            height={100}
            className="w-28 h-28 mt-8 mx-auto object-contain drop-shadow-lg sm:w-45 sm:h-45 md:w-57 md:h-57 lg:absolute lg:-right-8 lg:bottom-0 lg:-translate-y-1/2 lg:mt-0"
          />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-[16rem] sm:max-w-sm md:max-w-2xl mx-auto px-2">
            At <strong>WayBionic</strong>, we strive to revolutionize remote
            surgery by developing a bionic arm inspired by the challenges of
            performing medical procedures in space. Our goal is to create
            innovative, reliable, and precise tools that empower both astronauts
            and doctors—whether in orbit or on Earth.
          </p>
          <Image
            src="/images/pencilbionic.png"
            alt="WayBionic Mascot with Pencil"
            width={500}
            height={500}
            className="w-28 h-28 mt-8 mx-auto object-contain drop-shadow-lg sm:w-40 sm:h-40 md:w-52 md:h-52 lg:absolute lg:-right-8 lg:bottom-0 lg:translate-y-3/4 lg:mt-0"
          />
        </div>
      </div>
    </section>
  );
}
