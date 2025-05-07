import React from "react";

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
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
          At <strong>WayBionic</strong>, we strive to revolutionize remote
          surgery by developing a bionic arm inspired by the challenges of
          performing medical procedures in space. Our goal is to create
          innovative, reliable, and precise tools that empower both astronauts
          and doctors—whether in orbit or on Earth.
        </p>
      </div>
    </section>
  );
}
